import { Component, OnInit } from '@angular/core';
import {SingClient} from "../../../shared/interfaces";
import {SingService} from "../../../shared/sing.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: SingClient[];

  constructor(public singService: SingService) { }

  ngOnInit() {
    this.singService.getAllSing().subscribe((sing) => {
      this.messages = sing;
    });
  }

  remove(id: SingClient) {
    this.singService.removeSing(id).subscribe(() => {
      this.messages = this.messages.filter((m) => m._id !== id);
    });
  }

}
