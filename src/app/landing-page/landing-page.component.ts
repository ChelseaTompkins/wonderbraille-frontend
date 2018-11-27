import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  newStudent = new FormGroup({
    studentName: new FormControl(''),
    studentEmail: new FormControl(''),
    studentPassword: new FormControl(''),
  });

  existingStudent = new FormGroup({
    studentEmail: new FormControl(''),
    studentPassword: new FormControl(''),
  });

  submit = false;

  constructor(private authService: AuthService) {
   }

  ngOnInit() {
  }

  newStuOnSubmit() {
    this.authService.studentRegister(this.newStudent.value);
  }

  existingStuOnSubmit() {
    this.authService.studentLogin(this.existingStudent.value);
  }
}

