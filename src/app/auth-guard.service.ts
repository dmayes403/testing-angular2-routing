import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapShot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapShot,
              state: RouterStateSnapShot): Observable<boolean> | Promise<boolean> | boolean {
        
              }
}
