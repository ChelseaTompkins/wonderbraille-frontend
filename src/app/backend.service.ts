import { Injectable } from '@angular/core';
import { Response, } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';


export interface Instructor {
  id: number;
  instructorName: string;
  instructorEmail: string;
}

export interface Question {
  question: string;
  img: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: 'A' | 'B' | 'C' | 'D';
}

@Injectable()
export class BackendService {
  public instructors;
  public questions;

  constructor(private http: HttpClient) {}

  // Instructor logic
  fetchInstructors() {
    this.http.get('/api/instructors', {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).subscribe((response: Response) => {
          // const instructorData = response.json();
          // const instructors = instructorData.map(instructor => instructor);
          this.instructors = response;
      }
    );
  }

  // getInstructors() {
  //   return this.instructors;
  // }

  // Question logic
  fetchQuestions() {
    this.http.get('/api/questions', {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).subscribe((response) => {
      this.questions = response;
      console.log(this.questions);
        // const questionData = response;
        // console.log(response.json())
        // const questions = response.map(question => question);
        // this.questions = response;
      }
    );
  }

  // getQuestions() {
  //   return this.questions;
  // }
}
