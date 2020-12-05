import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  vacancy;
  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
      this.employeeService.employee$.subscribe(e => {
        e.appliedJobs[0].hasOwnProperty('title')?
        this.vacancy = e : null;
      })
  }

}
