import { Injectable , inject} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router , CanActivateFn} from '@angular/router';
import { Observable } from 'rxjs';import { AuthenticationService } from 'src/app/Service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Auth :AuthenticationService, private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.Auth.IsLoggedIn){
        console.log('Access Denied');
        return this.router.createUrlTree(['/login']);
      }else {
        return true
      }
  }

}



export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AuthenticationService);
  const router = inject(Router);
  if (!loginService.IsLoggedIn){
    return router.createUrlTree(['/login']);
  }else {
    return true
  }
};


