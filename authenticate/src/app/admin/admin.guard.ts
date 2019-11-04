import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const canActivate = this.cookieService.check('accessToken');
      // console.log ('canActivate=' + canActivate);
      if (canActivate) {
          console.log(this.cookieService.get('accessToken'));
      } else  {
        this.router.navigate(['/login']);
      }
      return canActivate;
/*
      console.log (state.url, sessionStorage.getItem('isAuthenticated') !== null);
      const canActivate = (sessionStorage.getItem('isAuthenticated') !== null);
      if (!canActivate) {
        this.router.navigate(['/login']);
      }

      return canActivate;
      */
  }

}
