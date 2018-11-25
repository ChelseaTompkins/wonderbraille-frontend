import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorInfoComponent } from './instructor-info.component';

describe('InstructorInfoComponent', () => {
  let component: InstructorInfoComponent;
  let fixture: ComponentFixture<InstructorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
