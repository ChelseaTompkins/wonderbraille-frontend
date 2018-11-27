import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-instructor-info',
  templateUrl: './instructor-info.component.html',
  styleUrls: ['./instructor-info.component.css']
})
export class InstructorInfoComponent implements OnInit {
  backendService: BackendService;

  constructor(backendService: BackendService) {
    this.backendService = backendService;
   }

  ngOnInit() {
    this.backendService.fetchInstructors();
  }

}
