import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userSubject: ReplaySubject<any>;
  constructor(private router: Router, public http: HttpClient) {
    this.userSubject = new ReplaySubject();
    this.checkAuth();
  }

  checkAuth() {
    console.log("Entro a check auth");
    let token = localStorage.getItem("token");
    if (token) {
      this.getuser().subscribe(
        (user: any) => {
          this.userSubject.next(user);
        },
        (error: any) => {
          this.userSubject.next(null);
        }
      );
    } else {
      this.userSubject.next(null);
    }
  }

  getuser() {
    return this.http.get(`${environment.ENDPOINT}/me`);
  }

  signin() {}
  signout() {}
}
