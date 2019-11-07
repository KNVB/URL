import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SayHelloService } from '../services/say-hello.service';
import { ServerResponse } from '../services/server-response';
@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.css']
})
export class RosterListComponent implements OnInit {

  constructor(private sayHelloService: SayHelloService,
              private cookieService: CookieService) { }

  ngOnInit() {
  }
  sayHello() {
    this.sayHelloService.sayHello().subscribe(
      (sr: ServerResponse) => {
        alert(sr.returnObj);
      }
    );
  }
}
