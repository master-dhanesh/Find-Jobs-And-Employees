import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


export interface Employer{
  name: string,
  email: string,
  avatar: string,
  postedJobs: Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  employerRef: AngularFireList<Employer> = null;
  employer$: Observable<any>;
  activeEmployerId;
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) { 
    this.employerRef = db.list('/employer');

    this.employer$ = this.auth.authState.pipe(
      switchMap( user => {
        if(user){
          this.activeEmployerId = user.uid;
          console.log('employer token found');
          return this.db.object(`/employer/${user.uid}`).valueChanges();
        } else{
          console.log('employer token not found');
          return of(null);
        }
      })
    )

  }

  FetchEmployer(){

  }

  RegisterEmployer(employer){
      this.auth.createUserWithEmailAndPassword(employer.email, employer.password).then(employe => {
        const { name, email, avatar, postedJobs } = employer;
        this.CreateEmployer({name, email, avatar, postedJobs}, employe.user.uid);
      });
  }

  CreateEmployer(employer: Employer, eid){
      this.db.database.ref(`/employer/${eid}`).set(employer);
      console.log('employer created!');
      this.router.navigate(['/employer-dash']);
  }

  SigninEmployer(email, password){
    this.auth.signInWithEmailAndPassword(email, password).then( employer => {
      console.log('employer signin!');
      this.router.navigate(['/employer-dash'])
    })
  }

  SignoutEmployer(){
      this.auth.signOut();
      console.log('employer signin!');
      this.router.navigate(['/employer-login'])
  }

  UpdateEmployer(employer){
      this.employerRef.update(this.activeEmployerId, employer);
      console.log('employer updated!');
  }
}
