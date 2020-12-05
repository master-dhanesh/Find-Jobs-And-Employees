import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';
import { Subject, Subscription } from 'rxjs';

import { EmployeeService } from '../../Services';

@Component({
  selector: 'app-employe-register',
  templateUrl: './employe-register.component.html',
  styleUrls: ['./employe-register.component.css']
})
export class EmployeRegisterComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  avatarLink = new Subject<any>();
  unsubs: Subscription;
  avatarUrl;
  constructor(
    private storage: AngularFireStorage,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }


  async uploadImage(event){
    const file = event.target.files[0];
    const uploadPath = 'Sheryishkill'+Date.now();
    const storageRef = this.storage.ref(uploadPath);
    await this.storage.upload(uploadPath, file).snapshotChanges().pipe(
      finalize(() => storageRef.getDownloadURL()
      .subscribe(url => this.avatarLink.next(url)))).subscribe();
    
    this.unsubs = this.avatarLink.subscribe( value => this.avatarUrl = value)


  }

  registerEmployee(){
    const employee = this.form.form.value;
    employee.avatar = this.avatarUrl;
    employee.appliedJobs = [''];
    this.unsubs.unsubscribe();
    this.employeeService.RegisterEmployee(employee);
  }

}
