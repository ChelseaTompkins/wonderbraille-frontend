import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// export interface Student {
//   studentName: string;
//   studentEmail: string;
//   studentPassword: string | undefined;
// }

@Injectable()
export class AuthService {
  // private students: Student[] = [];
  private headers = new HttpHeaders({});
  constructor(private http: HttpClient, private router: Router) {

  }
  // Auth
  studentLogin(body) {
  this.http.post('api/auth/login', body)
    .subscribe((response: Response) => {
      if (response['token']) {
        localStorage.setItem('token', response['token']);
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

//   verifyStudentToken() {
//     // send headers / verify header

//   }
}
