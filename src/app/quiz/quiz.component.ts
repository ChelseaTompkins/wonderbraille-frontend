import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  backendService: BackendService;
  userAnswer = '';
  activeQuestionIndex = 0;

  constructor(backendService: BackendService) {
    this.backendService = backendService;
   }

  ngOnInit() {
    this.backendService.fetchQuestions();
  }
  getQuestions() {
    return this.backendService.getQuestions();
  }

  selectAnswer (userAnswer: string) {
    this.userAnswer = userAnswer;
    console.log('selectAnswer', this.userAnswer);
  }

  onSubmit(userAnswer: string) {
    if (this.getQuestions()[this.activeQuestionIndex].answer !== userAnswer) {
      console.log('try again');
    } else {
      this.activeQuestionIndex++;
    }
    if (this.getQuestions().length === this.activeQuestionIndex + 1) {
      alert('Quiz complete');
      this.activeQuestionIndex = 0;
    }
  }
}
