import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private usersservice: UsersService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.usersservice.user$.pipe(
        map((username: string) => {

      // If no one is logged in, send them to login component
      if (username === null) {
        this.router.navigate(['/login']);
        return false;
      }

      if (state.url === '/login') {
        return true;
      }

     
      

      return true;
    }))

  }
}