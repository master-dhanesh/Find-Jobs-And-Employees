import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacanciesService } from 'src/app/Services';

@Component({
  selector: 'app-show-jobs',
  templateUrl: './show-jobs.component.html',
  styleUrls: ['./show-jobs.component.css']
})
export class ShowJobsComponent implements OnInit {
  matchedVacancies;
  constructor(
    private router: Router,
    private vacancyService: VacanciesService
  ) { }

  ngOnInit(): void {
    this.vacancyService.searchVacancy.subscribe( value => {
        this.matchedVacancies = value;
    })

  }

  vacancyDetails(vacancy){
    this.vacancyService.activeVacancy.next(vacancy);
    this.router.navigate(['/jobs-desc'])
  }

}
