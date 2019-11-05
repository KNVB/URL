import { Component, OnInit } from '@angular/core';
import { LoginObj } from './login-obj';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginObj('user', 'password');
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {

  }
  login(loginObj: LoginObj) {

    this.authenticationService.login(loginObj.userName, loginObj.password)
    .subscribe ((resultCode: number) => {
                  switch (resultCode) {
                    case 0 : this.router.navigate(['/admin']);
                             break;
                    case -2: alert('Invalid username or password');
                             break;
                    default:
                            alert('Unknown Error.');
                            break;
                  }
                },
                (error: HttpErrorResponse) => {
                  alert(error.message);
                });

   /*
   const loginResult = this.authenticationService.login(loginObj.userName, loginObj.password);
   alert(loginResult);
   switch (loginResult) {
    case 0 : this.router.navigate(['/admin']);
             break;
    case -2: alert('Invalid username or password');
             break;
    default:
            alert('Unknown Error.');
            break;
   }
   */
  }
}
