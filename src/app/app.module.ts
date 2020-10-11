import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import * as ace from 'ace-builds'; 

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { MainpageComponent } from './mainpage/mainpage.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component: MainpageComponent},
      {path:'MainComponent', component: MainpageComponent},
      {path:'',redirectTo:'MainComponent',pathMatch:'full'},
      {path:'**', component:ErrorComponent}]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
