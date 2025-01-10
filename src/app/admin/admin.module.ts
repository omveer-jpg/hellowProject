import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
import { AdminRouting } from './admin.routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminUserComponent
  ],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }
