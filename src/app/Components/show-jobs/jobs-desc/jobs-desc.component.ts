import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { EmployeeService, VacanciesService } from 'src/app/Services';

@Component({
  selector: 'app-jobs-desc',
  templateUrl: './jobs-desc.component.html',
  styleUrls: ['./jobs-desc.component.css']
})
export class JobsDescComponent implements OnInit {
  vacancy;
  unsubs: Subscription;
  constructor(
      private router: Router,
      private vacancyService: VacanciesService,
      private employeeService: EmployeeService
    ) { }

  ngOnInit(): void {
      this.vacancyService.activeVacancy.subscribe( v => {
        this.vacancy = v;
      })
  }

  onApplyNow(){
    this.unsubs = this.employeeService.employee$.subscribe( employee => {

        const {
          title, role, skills, salary, experience,
          qualification, course, description, gender, city, postedby
        } = this.vacancy;


        const employeeVacancy = {
          title, role, skills, salary, experience,
          qualification, course, description, gender, city, postedby
        } ;

        (employee.appliedJobs.length === 1 && typeof employee.appliedJobs[0] !== 'object' ) ?
        employee.appliedJobs[0] =  employeeVacancy : employee.appliedJobs.push(employeeVacancy);

        this.unsubs.unsubscribe();
        return this.employeeService.UpdateEmployee(employee);

    })
    localStorage.removeItem('vacancy');
    this.router.navigate(['/employe-dash'])
  }

}
