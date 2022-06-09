import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FotoService } from "../../foto.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-foto",
  templateUrl: "./add-foto.component.html",
  styleUrls: ["./add-foto.component.css"],
})
export class AddFotoComponent implements OnInit {
  form: FormGroup;
  imagePrev;
  image: File;
  @ViewChild("input", { static: false }) inputRef: ElementRef;

  constructor(private fotoService: FotoService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  addFoto() {
    this.fotoService
      .createFoto(this.form.value.name, this.image)
      .subscribe(() => {
        this.router.navigate(["/admin", "portfolio"]);
      });
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePrev = reader.result;
    };

    reader.readAsDataURL(file);
  }

  trigger() {
    this.inputRef.nativeElement.click();
  }
}
