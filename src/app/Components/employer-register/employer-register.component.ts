import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';
import { Subject, Subscription } from 'rxjs';

import { EmployerService } from '../../Services';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  avatarLink = new Subject<any>();
  unsubs: Subscription;
  avatarUrl;
  constructor(
    private storage: AngularFireStorage,
    private employerService: EmployerService
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

  registerEmployer(){
    const employer = this.form.form.value;
    employer.avatar = this.avatarUrl;
    employer.postedJobs = [''];
    this.unsubs.unsubscribe();
    console.log(employer);
    this.employerService.RegisterEmployer(employer);
  }

}
