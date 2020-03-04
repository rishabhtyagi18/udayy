import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
$ur11 = new EventEmitter();
$ur12 = new EventEmitter();


  constructor() { }

    firstUrlChange(url) {
        console.log("its true");

        this.$ur11.emit(url);
    }
    secondUrlChange(web) {
        console.log("its true 22"); 

        this.$ur12.emit(web);
    }
  
}