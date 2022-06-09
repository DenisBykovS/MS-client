import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as moment from "moment";
import { SingService } from "../../shared/sing.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { SingClient, Week } from "../../shared/interfaces";

@Component({
  selector: "app-sing",
  templateUrl: "./sing.component.html",
  styleUrls: ["./sing.component.css"],
})
export class SingComponent implements OnInit, OnDestroy {
  @ViewChild("inputElement", { static: false }) inputRef: ElementRef;
  calendarDisplay = false;
  calendar: Week[];
  form: FormGroup;
  m = moment();
  sub: Subscription;
  now;
  mon = "";

  constructor(private singService: SingService) {}

  ngOnInit() {
    moment.updateLocale("en", {
      week: {
        dow: 1,
      },
    });
    this.now = moment();
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", [
        Validators.required,
        Validators.maxLength(11),
      ]),
      dateSing: new FormControl(""),
      hours: new FormControl("", Validators.required),
      text: new FormControl(""),
    });
    this.singService.date.subscribe(this.generate.bind(this));
  }

  generate() {
    const startDay = this.now.clone().startOf("month").startOf("week");
    const endDay = this.now.clone().endOf("month").endOf("week");

    const date = startDay.clone().subtract(1, "day");

    this.mon = this.now.format("MMMM");

    const calendar = [];

    while (date.isBefore(endDay, "day")) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, "day").clone();
            const active = moment().isSame(value, "date");
            const disabled = !this.now.isSame(value, "month");
            const selected = this.now.isSame(value, "date");
            return {
              value,
              active,
              disabled,
              selected,
            };
          }),
      });
    }
    this.calendar = calendar;
    console.log(this.calendar, "CALENDAR");
  }

  onCalendar() {
    this.calendarDisplay = !this.calendarDisplay;
  }

  // tslint:disable-next-line:variable-name
  // go(number: number) {
  //   this.singService.changeMonth(number);
  // }

  go(n) {
    let newNow = this.now.add(n, "month");
    this.now = newNow;
    this.generate();
  }

  // @ts-ignore
  singDate(value: moment) {
    const x = value.format("DD.MM.YY");
    this.form.get("dateSing");

    this.inputRef.nativeElement.value = x;
  }

  submit() {
    const singData: SingClient = { ...this.form.value };
    singData.dateSing = this.inputRef.nativeElement.value;
    singData.phone = String(singData.phone);
    console.log(singData);
    this.sub = this.singService.addSing(singData).subscribe(() => {
      console.log("form-data", singData);
    });
    this.form.reset();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
