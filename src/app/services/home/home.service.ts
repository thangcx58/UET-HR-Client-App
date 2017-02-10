import { Injectable } from '@angular/core';
import { UserService} from '../user/user.service';

@Injectable()
export class HomeService {

  constructor(private userService:UserService) { }

}
