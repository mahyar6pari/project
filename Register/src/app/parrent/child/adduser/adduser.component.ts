import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdduserService } from './adduser.service';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent {
  adduserService=inject(AdduserService)
  checkmobile = /^09[0|1|2|3][0-9]{8}$/
  ngOnInit(): void {
    if (this.adduserService.form.value.tel?.match(this.checkmobile)) {
      this.adduserService.state=true
      this.adduserService.colorstate1=true
      console.log("a");
    }

    else{
      console.log("haha");
      
    }
  }



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
}
