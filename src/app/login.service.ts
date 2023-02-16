import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './displaysongs/model/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }


  public loginUser(user :User):Observable<User>{
    console.log(user.mobileNumber)
    return this._http.post<User>("http://localhost:8888/api/v1/verify1",user)
    }

    public fetchUserIdService(userName:String):Observable<User>{
    
      return this._http.get<User>("http://localhost:8888/api/v1/user2/"+userName)
      }
}
