import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ShowCookieService } from '../services/show-cookie.service';
import { AuthenticationService } from '../services/authentication.service';
import { ServerResponse } from '../services/server-response';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private showCookieService: ShowCookieService,
              private cookieService: CookieService) { }

  ngOnInit() {  }
  showCookie() {
    this.showCookieService.getCookie().subscribe(
      (sr: ServerResponse) => {
        console.log(sr.returnObj);
      }
    );
  }
  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
