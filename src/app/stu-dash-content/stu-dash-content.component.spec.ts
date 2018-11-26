import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDashContentComponent } from './stu-dash-content.component';

describe('StuDashContentComponent', () => {
  let component: StuDashContentComponent;
  let fixture: ComponentFixture<StuDashContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuDashContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuDashContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
