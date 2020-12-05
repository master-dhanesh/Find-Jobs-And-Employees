import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployerService, VacanciesService } from 'src/app/Services';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  unsubs: Subscription;
  constructor(
    private vacancyService: VacanciesService,
    private employerService: EmployerService
  ) { }

  ngOnInit(): void {
  }

  postJob(){
    this.unsubs = this.employerService.employer$.subscribe( employer => {
      const vacancy = this.form.form.value;
        const {
          title, role, skills, salary, experience,
          qualification, course, description, gender, city
        } = vacancy;

        vacancy.skills = skills.split(',');
        vacancy.postedby = {name: employer.name, email: employer.email, avatar: employer.avatar};

        const employerVacancy = {
          title, role, skills, salary, experience,
          qualification, course, description, gender, city
        } ;

        (employer.postedJobs.length === 1 && typeof employer.postedJobs[0] !== 'object' ) ?
          employer.postedJobs[0] =  employerVacancy : employer.postedJobs.push(employerVacancy);

          this.unsubs.unsubscribe();
        return this.vacancyService.CreateVacancy(vacancy, employer);
    });
  }

}
