import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NavComponent } from './nav/nav.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { InstructorInfoComponent } from './instructor-info/instructor-info.component';
import { WbResourcesComponent } from './wb-resources/wb-resources.component';


const appRoutes: Routes = [
  { path: 'quizzes', component: QuizDisplayComponent },
  { path: 'braille1-quiz1', component: QuizComponent },
  { path: 'instructors', component: InstructorInfoComponent },
  { path: 'resources', component: WbResourcesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    StudentDashboardComponent,
    NavComponent,
    QuizDisplayComponent,
    InstructorInfoComponent,
    WbResourcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
