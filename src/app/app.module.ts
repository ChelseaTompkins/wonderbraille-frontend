import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardNavComponent } from './student-dashboard-nav/student-dashboard-nav.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';

const appRoutes: Routes = [
  { path: 'quiz-display', component: QuizDisplayComponent },
  { path: 'braille1-quiz1', component: QuizComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    StudentDashboardComponent,
    StudentDashboardNavComponent,
    QuizDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
