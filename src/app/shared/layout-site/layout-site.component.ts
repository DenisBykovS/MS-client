import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-site",
  templateUrl: "./layout-site.component.html",
  styleUrls: ["./layout-site.component.css"],
})
export class LayoutSiteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goWatsApp() {
    let url = "https://web.whatsapp.com/send?phone=$79261045128";

    window.open(url);
  }
}
