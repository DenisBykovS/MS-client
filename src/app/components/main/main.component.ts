import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  // banerArr = [
  //   { src: "../../../assets/img/m-baner.jpg", text: "test text 1" },
  //   { src: "../../../assets/img/n-baner.jpg", text: "test text 2" },
  //   { src: "../../../assets/img/p-baner.jpg", text: "test text 3" },
  //   { src: "../../../assets/img/u-baner.jpg", text: "test text 4" },
  // ];
  banerArr = [
    "../../../assets/img/m-baner.jpg",
    "../../../assets/img/n-baner.jpg",
    "../../../assets/img/p-baner.jpg",
    "../../../assets/img/u-baner.jpg",
  ];

  img = "../../../assets/img/m-baner.jpg";
  index = 0;

  @ViewChild("baner", { static: true }) eltRef: ElementRef;

  constructor() {}

  ngOnInit() {
    this.banerGo();
  }

  banerGo() {
    let num = 0;
    setInterval(() => {
      if (num === 4) {
        num = 0;
      }
      this.img = this.banerArr[num];
      num++;
    }, 3000);
  }

  // banerNext() {
  //   let i = this.index++;
  //   this.img = this.banerArr[i];
  // }

  // banerPrev() {
  //   let i = this.index--;
  //   this.img = this.banerArr[i];
  // }
}
