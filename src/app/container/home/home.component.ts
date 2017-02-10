import { Component, OnInit } from '@angular/core';
import {User}                from '../../model/user';
import {HomeService}         from '../../services/home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user:User;
  constructor(private homeService:HomeService) {}

  ngOnInit(){
  }

}
