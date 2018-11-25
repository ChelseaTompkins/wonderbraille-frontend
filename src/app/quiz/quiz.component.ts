import { Component, OnInit } from '@angular/core';

export interface Question {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: 'A' | 'B' | 'C' | 'D';
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [
    {question: 'What color is the sky?', A: 'Blue', B: 'Green', C: 'Yellow', D: 'Purple', answer: 'A'},
    {question: 'What color is the grass?', A: 'Blue', B: 'Green', C: 'Yellow', D: 'Purple', answer: 'B'}
  ];
  userAnswer = '';
  activeQuestionIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  checkCorrect (userAnswer: string) {
    if (this.questions[this.activeQuestionIndex].answer === userAnswer) {
      console.log('correct');
      this.activeQuestionIndex++;
    } else {
      console.log('try again');
    }
  }

  selectAnswer (userAnswer: string) {
    this.userAnswer = userAnswer;
    console.log(userAnswer);
  }

  checkEnd() {
    if (this.questions.length === this.activeQuestionIndex + 1) {
      alert('Quiz complete');
      this.activeQuestionIndex = 0;
    }
  }
}
