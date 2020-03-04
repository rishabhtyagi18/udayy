import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NotifierService } from "angular-notifier";
import { NavbarService } from '../navbar/navbar.service';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName: string 
  password:string 
  firstUrl: SafeResourceUrl
  secondUrl: SafeResourceUrl

  constructor(private route :Router,private notifier: NotifierService, 
    private navService: NavbarService, private s: DomSanitizer){
  }

  ngOnInit(){
    console.log("sdsdfadadllllll")
    this.navService.$ur11
    .subscribe((data) => {
      console.log("Yeeeee abc")

      this.firstUrl = this.s.bypassSecurityTrustResourceUrl(data)
      console.log(this.firstUrl)
    });
    this.navService.$ur12
    .subscribe((data) => {
      console.log("Yeeeee gjhhk")

      this.secondUrl = this.s.bypassSecurityTrustResourceUrl(data)
      console.log(this.secondUrl)
    })
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
