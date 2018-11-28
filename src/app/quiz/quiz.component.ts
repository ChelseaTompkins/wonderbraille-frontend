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
  isQuizFinished = false;

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
    // console.log('selectAnswer', this.userAnswer);
  }

  onSubmit(userAnswer: string) {
    if (this.backendService.questions[this.activeQuestionIndex].answer !== userAnswer) {
      console.log('Try again');
    } else {
      if (this.backendService.questions.length === this.activeQuestionIndex + 1) {
        // alert(this.isAlert());
        this.isQuizFinished = true;
        this.activeQuestionIndex = 0;
      } else {
        this.activeQuestionIndex++;
      }
      this.backendService.updateStudentProgress(this.backendService.questions[this.activeQuestionIndex]).subscribe(() => {
      });
    }
  }

  progressBar() {
    const progress = (this.activeQuestionIndex / this.backendService.questions.length * 100).toFixed(0) + '%';
    const progressObj = {
      width: progress
    };
    return progressObj;
  }

  closeAlert() {
    return this.isQuizFinished = false;
  }
}
