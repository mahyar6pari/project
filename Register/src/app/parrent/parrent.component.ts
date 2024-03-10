import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdduserService } from './child/adduser/adduser.service';
import { MobileService } from './child/mobile/mobile.service';
import { AdduserComponent } from "./child/adduser/adduser.component";
import { MobileComponent } from "./child/mobile/mobile.component";
import { SuccessfullComponent } from "./child/successfull/successfull.component";

@Component({
    selector: 'app-parrent',
    standalone: true,
    templateUrl: './parrent.component.html',
    styleUrl: './parrent.component.scss',
    imports: [CommonModule, RouterModule, ReactiveFormsModule, AdduserComponent, MobileComponent, SuccessfullComponent]
})
export class ParrentComponent {
  adduserService=inject(AdduserService)
  mobileService=inject(MobileService)
  router=inject(Router)
  state:any=false
  checkmobile = /^09[0|1|2|3][0-9]{8}$/
  //09301977016
  state2:any=true
  colorstate1=false
  colorstate2=false
  state3=false
  confirm(){
    if (this.adduserService.form.value.tel?.match(this.checkmobile)) {
      this.state=true
      this.colorstate1=true
      this.state3=false

    }
    else{
      
      this.state3=true
    }

  }
  Successfull(){

      this.state2=false
      this.colorstate2=true


  }
  previous(){
    this.colorstate1=false
    this.state=false
    
  }
}
