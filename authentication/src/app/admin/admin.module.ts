import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { JWTInterceptor } from './jwtinterceptor';
import { ResponseInterceptor } from './responseinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: JWTInterceptor, 
      multi: true 
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ResponseInterceptor, 
      multi: true 
    }]
})
export class AdminModule { }
