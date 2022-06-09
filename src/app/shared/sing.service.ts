import { Injectable, OnInit } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SingClient } from "../shared/interfaces";

@Injectable({
  providedIn: "root",
})
export class SingService {
  constructor(private http: HttpClient) {}

  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  // changeMonth(num: number) {
  //   const val = this.date.value.add(num, "month");
  //   this.date.next(val);
  // }

  addSing(message: SingClient): Observable<SingClient> {
    return this.http.post<SingClient>(`/api/message`, message);
  }

  getAllSing(): Observable<SingClient[]> {
    return this.http.get<SingClient[]>("/api/message");
  }

  removeSing(id: SingClient) {
    return this.http.delete(`/api/message/${id}`);
  }
}
