import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeLoginComponent } from './employe-login.component';

describe('EmployeLoginComponent', () => {
  let component: EmployeLoginComponent;
  let fixture: ComponentFixture<EmployeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
