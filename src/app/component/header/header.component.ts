import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';
import { ValidService } from 'src/app/services/valid.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
    sandtotable:any[]=[];
    editcompletedata:any;
    destroyUn!: Subscription;
  constructor(public dialog:MatDialog,private validservice:ValidService) { }

  openDialog(){
   // const dialogRef = 
    this.dialog.open(DialogbodyComponent,{
      width:'380px',
      data:{mode:'add'}
    });

    // dialogRef.afterClosed().subscribe((result:any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  ngOnInit(): void {
 this.destroyUn = this.validservice.dataemitter.subscribe((val:any)=>{
    let allData = [];
  let receiveddata = localStorage.getItem('savedData');
  if(receiveddata != null){
    allData = JSON.parse(receiveddata);
  }
  let dataExists = allData.find((x:any)=> x.id === val.id);
  if(dataExists){
    dataExists.name = val.name
    dataExists.email = val.email
    dataExists.phone = val.phone
    dataExists.city = val.city
  }else{
      allData.push(val);
  }
  localStorage.setItem('savedData',JSON.stringify(allData));

  this.sandtotable = allData;

  //editable data


  })

  //practice data

  let allData = [];
  let receiveddata = localStorage.getItem('savedData');
  if(receiveddata != null){
    allData = JSON.parse(receiveddata);
  }

  localStorage.setItem('savedData',JSON.stringify(allData));
  this.sandtotable = allData;
  }

  //delete method
  deletemethod(student:any){
   let index = this.sandtotable.findIndex((x:any)=>{
    return x.id == student;
   })
   if(index != -1){
   this.sandtotable.splice(index,1);
   alert('row deleted');
  }else{
    alert('row not found');
  }
    //console.log('delete method rendered');
    let getlocal =[];
    let getfromlocal = localStorage.getItem('savedData');
    if(getfromlocal != null){
      getlocal = JSON.parse(getfromlocal);
    }
    let indexes = getlocal.findIndex((x:any)=>x.id==student);
    if(indexes != -1){
      getlocal.splice(indexes,1);
    }
    return localStorage.setItem('savedData',JSON.stringify(getlocal));
  }


  //edit method that is
  Editmethod(deStudent:any){
    this.dialog.open(DialogbodyComponent,{
      width:'380px',
      data:{mode:'edit', student:deStudent}
    });
    //console.log(data)
  }

  ngOnDestroy(): void {
    this.destroyUn?.unsubscribe();
  }

}
