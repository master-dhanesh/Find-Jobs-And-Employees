import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployerService } from 'src/app/Services';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor(
    private employerService: EmployerService
  ) { }

  ngOnInit(): void {
  }

  loginEmployer(){
    const { email, password } = this.form.form.value;
    this.employerService.SigninEmployer(email, password);
  }
}
