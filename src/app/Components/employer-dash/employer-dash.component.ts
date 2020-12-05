import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/Services';

@Component({
  selector: 'app-employer-dash',
  templateUrl: './employer-dash.component.html',
  styleUrls: ['./employer-dash.component.css']
})
export class EmployerDashComponent implements OnInit {
  vacancy;
  constructor(
    private employerService: EmployerService
  ) { }

  ngOnInit(): void {
      this.employerService.employer$.subscribe( e => {
        e.postedJobs[0].hasOwnProperty('title') ? 
        this.vacancy = e : null;
      })
  }

}
