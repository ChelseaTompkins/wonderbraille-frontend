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
  isRegistered = false;

  newStudent = new FormGroup({
    studentName: new FormControl(''),
    studentEmail: new FormControl(''),
    studentPassword: new FormControl(''),
  });

  existingStudent = new FormGroup({
    studentEmail: new FormControl(''),
    studentPassword: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  newStuOnSubmit() {
    this.authService.studentRegister(this.newStudent.value);
    this.isRegistered = true;
    this.newStudent.reset();
  }

  existingStuOnSubmit() {
    this.authService.studentLogin(this.existingStudent.value);
  }
}

