import { Component, OnInit } from '@angular/core';
import { User } from '../displaysongs/model/User';
import { DisplaysongsService } from '../displaysongs.service';
import {FormGroup,FormControl} from '@angular/forms';
import {Route,Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  users: User[] = [];
  constructor(private _service:LoginService,private service:DisplaysongsService,private router:Router) { }
  componentName = "login";
  validation={};
  form: any = {};
  num:any;
  ngOnInit(): void {
  }
  
  goToDashboard(){
    //if(this.form.username === "" || this.form.userId === "" || this.form.password === ""){alert("All fields are required ")}
    this.num=0;
    this.num=this.form.username;
    console.log(this.form.username)
    this.service.setValue(this.num);
    console.log(this.num)
    this._service.loginUser(this.form).subscribe(
      data=>{
        console.log("response received",data);
      localStorage.setItem("userRecord",JSON.stringify(data));
      this.num=0;
    //this.num=data.userId;
    console.log(data.userId)
    this.service.setValue(data.userId);
    //console.log(this.num)
    this.router.navigate(["/StartingPage"],{state:{data : this.num}})
    //window.location.href="DisplayAll";
  },
      err=>{console.log("exception occured");
      alert("Invalid Credentials Register Now")
    }
    )

  }

}
