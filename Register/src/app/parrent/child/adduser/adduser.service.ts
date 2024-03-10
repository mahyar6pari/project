import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class AdduserService{
    fb=inject(FormBuilder)
    state:any=false
    colorstate1:boolean=false
    form=this.fb.group({
        name:['',Validators.required],
        tel:['',Validators.required],
       })
}