import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowCookieService {

  constructor(private http: HttpClient) { }

  getCookie() {
    const requestParams = new HttpParams();
    return this.http.get('../RestfulAPI/ShowKey');
  }
}
