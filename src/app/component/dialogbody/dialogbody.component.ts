import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidService } from 'src/app/services/valid.service';

@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent implements OnInit {
   inputtext:any='';
   dialogclose:any=''; 
   getdatavalid:any; 
   ondestroyeddata:any;
   changebutton='';
  

  constructor(private validservice:ValidService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  signupform = new FormGroup({
    id : new FormControl('',[Validators.required]),
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    phone : new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    city : new FormControl('',[Validators.required])
  })

  get f(){
   return this.signupform.controls;
  }

  handleform(e:any){
    this.validservice.dataEmitToComponent(e);
    this.dialogclose = true;

   
  }

  ngOnInit(): void {
   console.log(this.data);
    if(this.data.mode ==='edit'){
   this.changebutton ='upadate';
    }else{
      this.changebutton ='add';
    }

    this.signupform.patchValue({
       id:this.data.student?.id,
       name:this.data.student?.name,
       email:this.data.student?.email,
       phone:this.data.student?.phone,
       city:this.data.student?.city,
    })

console.log(this.signupform);
  }    

}


