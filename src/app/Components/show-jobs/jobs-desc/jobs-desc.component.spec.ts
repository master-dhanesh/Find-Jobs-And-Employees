import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDescComponent } from './jobs-desc.component';

describe('JobsDescComponent', () => {
  let component: JobsDescComponent;
  let fixture: ComponentFixture<JobsDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
