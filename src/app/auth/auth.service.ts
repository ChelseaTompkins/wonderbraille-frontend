import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {
  http: HttpClient;
  httpHeaders: HttpHeaders;
  req: HttpRequest<any>;

  constructor(http: HttpClient, httpHeaders: HttpHeaders) {
    this.http = http;
    this.httpHeaders = httpHeaders;
  }
  // Auth
  studentLogin(body) {
    this.http.post('/login', body)
    .subscribe((response: Response) => {

    });
  }

  studentRegister(body) {
    this.http.post('/register', body)
    .subscribe((response: Response) => {

    });
  }

  verifyStudentToken() {
    // send headers / verify header
  }

}
