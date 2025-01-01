import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor() { }
dataemitter = new Subject<any>();
//editdataemitter = new Subject<any>();
editdataemitter = new EventEmitter<any>();
 
dataEmitToComponent(data:any){
 this.dataemitter.next(data);
}

dataEmitToDialog(eData:any){
   this.editdataemitter.emit(eData);
   //console.log(eData);
}
}
