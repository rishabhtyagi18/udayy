import { Component, OnInit, EventEmitter } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  textbox1: string;
  textbox2: string;
  close:""
  constructor(private nav: NavbarService,private route :Router,) { }

  ngOnInit(){
  }

  firstUrlChange(url) {
    this.nav.firstUrlChange(url);
  }

  secondUrlChange(web) {
    console.log("sdfsnkgkdjskdjlfaldvjqoasn")
    this.nav.secondUrlChange(web);
  }

  logout(close){
    this.route.navigate(["/"]) 
  }
}
