import { Component, OnInit } from '@angular/core';
import {UserService}         from '../../services/user/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  signup(user:Object){
    this.userService._signup(user).subscribe((_user)=>
          console.log(_user));
        }
}
