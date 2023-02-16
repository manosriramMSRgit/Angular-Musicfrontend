import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './displaysongs/model/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }


  public registerUserFromRemote(user :User):Observable<User>{
    console.log(user.mobileNumber)
    return this._http.post<User>("http://localhost:8888/api/v1/login",user)
    }
    public loginVerification(mobileNumber:Number):Observable<User>{
    
      return this._http.get<User>("http://localhost:8888/api/v1/user/"+mobileNumber)
      }

      checkUser(user: User ): Observable<User>{
      
         return this._http.get<User>("http://localhost:8888/api/v1/user1/"+user.userName);
      }


}
