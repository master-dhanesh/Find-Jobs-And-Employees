import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ShowJobsComponent } from './Components/show-jobs/show-jobs.component';
import { JobsDescComponent } from './Components/show-jobs/jobs-desc/jobs-desc.component';
import { EmployeRegisterComponent } from './Components/employe-register/employe-register.component';
import { EmployerRegisterComponent } from './Components/employer-register/employer-register.component';
import { EmployerLoginComponent } from './Components/employer-login/employer-login.component';
import { EmployeLoginComponent } from './Components/employe-login/employe-login.component';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { EmployerDashComponent } from './Components/employer-dash/employer-dash.component';
import { EmployeeDashComponent } from './Components/employee-dash/employee-dash.component';

import { EmployeeGuard } from './Services/Guards/employee.guard';
import { EmployerGuard } from './Services/Guards/employer.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'show-jobs', component: ShowJobsComponent },
    { path: 'jobs-desc', component: JobsDescComponent },
    { path: 'employe-login', component: EmployeLoginComponent },
    { path: 'employer-login', component: EmployerLoginComponent },
    { path: 'employe-register', component: EmployeRegisterComponent },
    { path: 'employer-register', component: EmployerRegisterComponent },
    { path: 'post-job', component: PostJobComponent, canActivate:[EmployerGuard] },
    { path: 'employer-dash', component: EmployerDashComponent, canActivate:[EmployerGuard] },
    { path: 'employe-dash', component: EmployeeDashComponent, canActivate:[EmployeeGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }