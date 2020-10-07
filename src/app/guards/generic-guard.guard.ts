import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GenericGuardGuard implements CanActivate {
  constructor(private usersservice: UsersService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.usersservice.user$.pipe(
        map((username: string) => {
          if (username !== null){
            this.router.navigate(['/home-page']);
            return false;
          }
          return true;
        }
    ))
 
    }  
}
