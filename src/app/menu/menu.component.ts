import { Component, OnInit } from '@angular/core';
import {User}                from '../model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public user= User;
  constructor() { }
  ngOnInit() {
  }

}
