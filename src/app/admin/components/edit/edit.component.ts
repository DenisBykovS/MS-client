import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Foto } from "src/app/shared/interfaces";
import { FotoService } from "../../foto.service";

@Component({
  selector: "app-edit-page",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  @ViewChild("input", { static: false }) inputRef: ElementRef;
  form: FormGroup;
  image: File;
  imagePrev;
  idFoto: string;
  textValidator: string;
  foto: Foto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fotoService: FotoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editFoto(params.id);
      this.idFoto = params.id;
    });
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  editFoto(id) {
    this.fotoService.getById(id).subscribe((foto) => {
      this.foto = foto;
      this.textValidator = this.foto.name;
    });
  }

  updatePost() {
    this.fotoService
      .updatePost(this.idFoto, this.form.value.name, this.image)
      .subscribe(() => {
        this.router.navigate(["/admin", "portfolio"]);
      });
  }

  trigger() {
    this.inputRef.nativeElement.click();
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
}
