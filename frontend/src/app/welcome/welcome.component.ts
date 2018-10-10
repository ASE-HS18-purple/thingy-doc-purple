import { Component, OnInit } from '@angular/core';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  login() {
  }

  signUp() {
    this.modalService.open(SignUpComponent, {size: 'lg'});
  }


}
