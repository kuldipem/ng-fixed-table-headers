import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdashboardComponent } from './logdashboard.component';

describe('LogdashboardComponent', () => {
  let component: LogdashboardComponent;
  let fixture: ComponentFixture<LogdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
