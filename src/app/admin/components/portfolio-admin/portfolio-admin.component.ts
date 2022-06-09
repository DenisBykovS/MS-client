import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Foto } from "src/app/shared/interfaces";
import { FotoService } from "../../foto.service";

@Component({
  selector: "app-portfolio-admin",
  templateUrl: "./portfolio-admin.component.html",
  styleUrls: ["./portfolio-admin.component.css"],
})
export class PortfolioAdminComponent implements OnInit {
  pfotos: Foto[];

  constructor(private router: Router, private fotoService: FotoService) {}

  ngOnInit() {
    this.fotoService.getPostAll().subscribe((data) => {
      this.pfotos = data;
    });
  }

  delite(id: Foto) {
    this.fotoService.deletePost(id).subscribe(() => {
      this.pfotos = this.pfotos.filter((p) => p._id !== id);
    });
  }

  editFoto(id) {
    return this.router.navigate(["/admin", "edit", id]);
  }
}
