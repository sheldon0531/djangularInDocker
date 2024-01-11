import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  return inject(AuthService).isLoggedIn
    ? true
    : inject(Router).createUrlTree(['/']);
};
