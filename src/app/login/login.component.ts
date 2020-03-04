import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName: string 
  password:string 
  showNav:true
  constructor(private route :Router,private notifier: NotifierService){
    
  }

  ngOnInit(){

  }

  SaveData(firstName,password){
    console.log(firstName)
    if((firstName != null && firstName != undefined && firstName != "") && (password != null && password != undefined && password != "")){
      console.log(password)
      // this.toastr.success("successfull")
      localStorage.setItem("firstname",firstName)
      sessionStorage.setItem("firstname",firstName)
      // localStorage.getItem("firstname")
     this.route.navigate(["/home"])     
     
    }
    else{
      this.notifier.notify("success", "You are awesome! I mean it!");
    }
  }
}
