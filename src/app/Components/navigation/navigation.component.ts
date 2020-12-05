import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  defaultPanel: string = 'employe';
  pathString: string = 'employe' ;
  LoggedIn: boolean;
  constructor(
      private appService: AppService
    ) { }

  ngOnInit(): void {
      this.appService.validUser.subscribe(value => {
        if(value) this.LoggedIn = true;
        else this.LoggedIn = false;
      })
   }

  onPanelSwitch(value){
    this.pathString = value === 'employe' ? 'employe' : 'employer' ;
  }

  Logout(){
    this.appService.Logout();
  }

}
