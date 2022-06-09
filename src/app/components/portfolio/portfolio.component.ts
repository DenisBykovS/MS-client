import { Component, OnInit } from "@angular/core";
import { FotoService } from "src/app/admin/foto.service";
import { Foto } from "src/app/shared/interfaces";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  portfolioArr: Foto[] = [];

  constructor(private fotoService: FotoService) {}

  text = "";

  ngOnInit() {
    this.fotoService.getPostAll().subscribe((fotos) => {
      this.portfolioArr = fotos;
    });
  }
}
