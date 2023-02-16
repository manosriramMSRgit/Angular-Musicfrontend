import { Component, OnInit } from '@angular/core';
import { User } from '../displaysongs/model/User';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  flag:any;
  id:any;
  form: any = {};
  users: User[] = [];
  constructor(private _service:RegistrationService,) { }

  ngOnInit(): void {
  }

  registerUser()
  {
    this._service.checkUser(this.form).subscribe
  (
    data=>
    {
    if(data === null)
            {
          this._service.registerUserFromRemote(this.form).subscribe
          (data=>
            {
              
              console.log("response received");
              this.flag=true;
                this.loginVerification1()
                  
            },
            err => 
            {
              alert("User Already Exists Or Error Occured ")
              console.log("exception occured");
              // this.veri=false; 
              // this.verify()
              this.flag=false;
            }
          ) ;
            }},err=>{
              alert("Username Already Taken")
              console.log("hi")
            }
      
  );this.checkFlag();
  }
  checkFlag(){
    if(this.flag){
      this.loginVerification1();
    }
    
  }
  loginVerification1(){
    console.log(this.form.mobileNumber)
    this._service.loginVerification(this.form.mobileNumber).subscribe(data=>{
      
       this.id = data.userId;
       console.log(this.id)
       if (confirm("Registered Successfully!!! \n Your user Id is: "+this.id))
       {
        window.location.href="Login";
       }
      });}
      
//   verify()
//   {console.log("verify block");
//     if(this.veri=== true)
//     {
//       if (confirm("Registered Successfully")) {
//         window.location.href="./login";
//     }
//     else
//     {
//       alert("User Already Exists")
//     }

//   }
// }
}
