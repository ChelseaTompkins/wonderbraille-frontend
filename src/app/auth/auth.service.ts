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
      console.log('response', response);
      if (response['token']) {
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/dashboard']);
      } else {
        console.log('no');
      }
    });
  }

  studentRegister(body) {
    // this.http.post('/register', body)
    // .subscribe((response: Response) => {

    //   }
    // });
  }

  verifyStudentToken() {
    // send headers / verify header
  }

}
