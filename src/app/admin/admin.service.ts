import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  authUser(admin: Admin ): Observable<{token: string}> {
    return this.http.post<{token: string}>(`/api/auth/login`, admin)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('token', token);
        })
      );
  }

  logout() {
    localStorage.setItem('token', '');
  }

  isAuth() {
    return localStorage.getItem('token');
  }
}
