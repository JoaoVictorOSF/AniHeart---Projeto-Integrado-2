import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onLoggedin() {
    this.login = !this.login;
    console.log(this.login);
  }
}
