import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowCookieService {

  constructor(private http: HttpClient) { }

  getCookie() {
    return this.http.get('../RestfulAPI/Admin/ShowKey');
  }
}
