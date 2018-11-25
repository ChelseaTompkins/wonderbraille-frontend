import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

export interface Instructor {
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
  private instructors: Instructor[] = [];
  private questions: Question[] = [];

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  // Instructor logic
  fetchInstructors() {
    this.http.get('/api/instructors')
      .subscribe((response: Response) => {
          const instructorData = response.json();
          const instructors = instructorData.map(instructor => instructor);
          this.instructors = instructors;
      }
    );
  }

  getInstructors() {
    return this.instructors;
  }

  // Question logic
  fetchQuestions() {
    this.http.get('/api/questions')
      .subscribe((response: Response) => {
        const questionData = response.json();
        const questions = questionData.map(question => question);
        this.questions = questions;
      }
    );
  }

  getQuestions() {
    return this.questions;
  }
}
