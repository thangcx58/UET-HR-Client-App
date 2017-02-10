import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router} from '@angular/router';
import {User}         from '../../model/user';
import {Observable}   from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private loginUrl='http://localhost:8080/login';
  private SignupUrl='http://localhost:8080/signup';
  private GetAllUrl='http://localhost:8080';

  constructor(private http:Http, private router:Router) {}
  _login (body: Object): Observable<User>{
          let bodyString=JSON.stringify(body);
          let headers   = new Headers({ 'Content-Type': 'application/json' });
          let options   = new RequestOptions({ headers: headers });
          return this.http.post(this.loginUrl,body,options)
                          .map((res:Response)=>{
                            console.log(res.json());
                            this.router.navigate(['/user']);
                          })
                          .catch((error:any)=> Observable.throw(error.json().error || 'Server error'))
  }
  _signup(body:Object):Observable<User>{
    let bodyString=JSON.stringify(body);
    let headers   = new Headers({ 'Content-Type': 'application/json' });
    let options   = new RequestOptions({ headers: headers });
    return this.http.post(this.SignupUrl,body,options)
                    .map((res:Response)=>{
                      console.log(res.json());
                      this.router.navigate(['/login']);
                    })
                    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }
  _getAllUser():Observable<User[]>{
    return this.http.get(this.GetAllUrl)
                    .map((res:Response)=>res.json())
                    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }
  _editUser(body:User):Observable<User>{
    let bodyString=JSON.stringify(body);
    let headers   = new Headers({ 'Content-Type': 'application/json' },
                                // {  'auth-token': '$body.token' }
                                                                    );
    let options   = new RequestOptions({ headers: headers });
    return this.http.put(this.SignupUrl,body,options)
                    .map((res:Response)=>{
                      console.log(res.json());
                      this.router.navigate(['/user']);
                    })
                    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }
  _logout(body:User){
    let headers   = new Headers({ 'Content-Type': 'application/json' },
                                // {  'auth-token': body.token }
                                                                    );
    let options   = new RequestOptions({ headers: headers });
    return this.http.get(this.SignupUrl,options)
                    .map((res:Response)=>{console.log(res.json());
                                          (this.router.navigate(['/login']))});

  }
}
