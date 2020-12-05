import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRegisterComponent } from './employe-register.component';

describe('EmployeRegisterComponent', () => {
  let component: EmployeRegisterComponent;
  let fixture: ComponentFixture<EmployeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
