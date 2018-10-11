import {Component, OnInit} from '@angular/core';
import {UserModel} from '../model/user.model';
import {AuthModel} from '../model/auth.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private currentUser: AuthModel;

  constructor() {
    const user = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(user);
    console.log(JSON.stringify(this.currentUser));
  }

  ngOnInit() {
  }

}
