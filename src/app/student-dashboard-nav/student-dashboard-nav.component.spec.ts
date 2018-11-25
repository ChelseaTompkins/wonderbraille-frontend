import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardNavComponent } from './student-dashboard-nav.component';

describe('StudentDashboardNavComponent', () => {
  let component: StudentDashboardNavComponent;
  let fixture: ComponentFixture<StudentDashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
