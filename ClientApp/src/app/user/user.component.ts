import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  ngOnInit() {
    this.registrationForm = true;
  }

  loginForm: boolean;
  registrationForm: boolean;

  login(){
    console.log('clicked login');
      this.registrationForm = false;
      this.loginForm = true;
      return;
  }

  reg(){
    console.log('clicked reg');
    this.registrationForm = true;
    this.loginForm = false;
    return;
  }
}
