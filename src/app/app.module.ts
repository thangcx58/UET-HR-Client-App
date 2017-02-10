import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { HomeComponent } from './container/home/home.component';
import { EditUserComponent } from './container/edit-user/edit-user.component';

import {routing,
        appRoutingProviders} from './app.routing';
import { UserService}        from './services/user/user.service';
import { HomeService}        from './services/home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, UserService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
