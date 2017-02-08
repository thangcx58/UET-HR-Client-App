import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user/user.service';
import {User}         from '../../model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User;
  constructor(private userService: UserService) { }
  ngOnInit() {
  }
  login(user:Object){
     this.userService._login(user).subscribe((_user)=>
                                  console.log(_user));
  }
}
