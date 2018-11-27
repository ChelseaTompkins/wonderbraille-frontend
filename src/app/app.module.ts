import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NavComponent } from './nav/nav.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { InstructorInfoComponent } from './instructor-info/instructor-info.component';
import { WbResourcesComponent } from './wb-resources/wb-resources.component';
import { StuDashContentComponent } from './stu-dash-content/stu-dash-content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dashboard', component: StuDashContentComponent, canActivate: [AuthGuard] },
  { path: 'quizzes', component: QuizDisplayComponent, canActivate: [AuthGuard] },
  { path: 'braille1-quiz1', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'instructors', component: InstructorInfoComponent, canActivate: [AuthGuard] },
  { path: 'resources', component: WbResourcesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    StudentDashboardComponent,
    NavComponent,
    QuizDisplayComponent,
    InstructorInfoComponent,
    WbResourcesComponent,
    StuDashContentComponent,
    LandingPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BackendService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
