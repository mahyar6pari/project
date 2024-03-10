import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class MobileService{
    fb=inject(FormBuilder)
    form=this.fb.group({
        confirm:['',    Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{4}")
        ])] ,
       })
}
