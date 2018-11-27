import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';


@Injectable()
export class AuthService {
  // private headers = new HttpHeaders({});
  constructor(private http: HttpClient, private router: Router) {

  }
  // Auth
  studentLogin(body) {
  this.http.post('api/auth/login', body, )
    .subscribe((response: Response) => {
      if (response['token']) {
        localStorage.setItem('currentUser', response['token']);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  studentRegister(body) {
    this.http.post('api/auth/register', body)
    .subscribe((response: Response) => {
      alert('Thank you for registering!');
    });
  }

  verifyUserToken () {
    return this.http.get('api/instructors',  {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).map((response) => {
      console.log(response);
      if (response['message']) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    });
  }
}
