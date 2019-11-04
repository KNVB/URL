import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  serverResponse = '';
  constructor(private authenticationService: AuthenticationService ) {

    /* this.authenticationService.login('user', 'password')
    .subscribe((data: any) => {
                  console.log('success ' + data);
                  this.serverResponse = data.result;
                },
               (error) => {
                 console.log(error);
               }
    );
    */
  }

  ngOnInit() {
  }

}
