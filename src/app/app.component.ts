import { Component } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'topRxjsStuffs';
  users: any;
  constructor(private usersService: UsersService){
    
  }

  getUsers(){
    this.usersService.getUsers().subscribe(response => {
      this.users = response
    });
  }

  getData(){
    this.usersService.getData().subscribe(response => {
      this.users = response
    });
  }

  getUsersAndColors(){
    this.usersService.getUsersAndColor().subscribe(response => {
      this.users = response
    });
  }
}
