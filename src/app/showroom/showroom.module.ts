import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowroomComponent } from './showroom.component';
import { ShowroomListComponent } from './component/showroom-list/showroom-list.component';
import { ShowroomRouting } from './showroom.routing.module';



@NgModule({
  declarations: [
    ShowroomComponent,
    ShowroomListComponent
  ],
  imports: [
    CommonModule,
    ShowroomRouting
  ]
})
export class ShowroomModule { }
