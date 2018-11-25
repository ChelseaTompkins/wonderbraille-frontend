import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

export interface Instructor {
  instructorName: string;
  instructorEmail: string;
}

@Injectable()
export class BackendService {
  private instructors: Instructor[] = [];

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  fetchInstructors() {
    this.http.get('/api/instructors')
      .subscribe(
        (response: Response) => {
          const instructorData = response.json();
          const instructors = instructorData.map(instructor => instructor);
          this.instructors = instructors;
      }
    );
  }

  getInstructors() {
    return this.instructors;
  }
}
