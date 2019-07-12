import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate() {
    return new Observable<boolean>(obs=>{
      this.auth.userSubject.subscribe(data=>{
        obs.next(data);
      })
    });
  }
}
