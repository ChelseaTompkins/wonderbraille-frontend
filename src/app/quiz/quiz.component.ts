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
    this.backendService.fetchQuestions().subscribe(() => {
      this.backendService.questions.forEach((question, i) => {
        if (question.id === this.backendService.currentQuestion.id) {
          this.activeQuestionIndex = i;
          return;
        }
      });
    });
  }

  selectAnswer (userAnswer: string) {
    this.userAnswer = userAnswer;
    console.log('selectAnswer', this.userAnswer);
  }

  onSubmit(userAnswer: string) {
    if (this.backendService.questions[this.activeQuestionIndex].answer !== userAnswer) {
      console.log('try again');
    } else {
      this.activeQuestionIndex++;
      this.backendService.updateStudentProgress(this.backendService.questions[this.activeQuestionIndex]).subscribe(() => {
        console.log('kdslnkl');
      });
    }
    if (this.backendService.questions.length === this.activeQuestionIndex) {
      alert('Quiz complete');
      this.activeQuestionIndex = 0;
    }
  }
}
