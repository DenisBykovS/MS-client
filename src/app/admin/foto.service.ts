import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Foto } from "../shared/interfaces";

@Injectable({
  providedIn: "root",
})
export class FotoService {
  constructor(private http: HttpClient) {}

  getPostAll(): Observable<Foto[]> {
    return this.http.get<Foto[]>("/api/portfolio");
  }

  createFoto(name: string, image: File): Observable<Foto> {
    const formData = new FormData();
    if (image) {
      formData.append("image", image, image.name);
    }
    formData.append("name", name);

    return this.http.post<Foto>("/api/portfolio", formData);
  }

  updatePost(id: string, name: string, image: File): Observable<Foto> {
    const formData = new FormData();
    if (image) {
      formData.append("image", image, image.name);
    }
    formData.append("name", name);
    return this.http.patch<Foto>(`/api/portfolio/${id}`, formData);
  }

  deletePost(id: Foto) {
    return this.http.delete(`/api/portfolio/${id}`);
  }

  getById(id: Foto): Observable<Foto> {
    return this.http.get<Foto>(`/api/portfolio/${id}`);
  }
}
