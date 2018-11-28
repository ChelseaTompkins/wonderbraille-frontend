import { Injectable } from '@angular/core';
import { Response, } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
  public currentQuestion;

  constructor(private http: HttpClient) {}

  // Instructor logic

  fetchInstructors() {
    this.http.get('/api/instructors', {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).subscribe((response: Response) => {
          this.instructors = response;
      }
    );
  }

  // Question logic

  fetchQuestions() {
    return this.http.get('/api/questions', {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).map((response: any) => {
      this.questions = response.questions;
      this.currentQuestion = response.currentQuestion;
    }
  );
}

  // Student logic

  updateStudentProgress(question: any) {
    return this.http.put('/api/students/progress/' + question.id, {} , {
      headers: new HttpHeaders().set('token', localStorage.getItem('currentUser') || 'Invalid token')
    }).map((response: any) => {
        this.currentQuestion = response;
      }
    );
  }

}
