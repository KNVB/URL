import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { RosterListComponent } from './roster-list/roster-list.component';
import { RosterMonthPickerComponent } from './components/roster-month-picker/roster-month-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    RosterListComponent,
    RosterMonthPickerComponent,

  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
  ],
  exports : [],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
