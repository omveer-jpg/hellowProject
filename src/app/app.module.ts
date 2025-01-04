import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogbodyComponent } from './component/dialogbody/dialogbody.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app.routing.module';
import { Child1Component } from './home/child1/child1.component';
import { Child2Component } from './home/child2/child2.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogbodyComponent,
    Child1Component,
    Child2Component,
    HomeComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatDialogModule, ReactiveFormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
