import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SayHelloService {

  constructor(private http: HttpClient) { }
  sayHello() {
    return this.http.get('../RestfulAPI/SayHello');
  }
}
