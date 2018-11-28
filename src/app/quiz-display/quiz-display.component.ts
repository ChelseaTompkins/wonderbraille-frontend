import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {
  backendService: BackendService;

  constructor(backendService: BackendService) {
    this.backendService = backendService;
   }

  ngOnInit() {
    this.backendService.fetchQuestions().subscribe(() => {});
  }

  progressBar() {
    const progress = (this.backendService.currentQuestion.id / this.backendService.questions.length * 100).toFixed(0) + '%';
    const progressObj = {
      width: progress
    };
    return progressObj;
  }

}
