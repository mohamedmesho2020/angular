import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';
import { DBService } from './db.services';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
  

   
  ],
  imports: [



  BrowserModule,
    AppRoutingModule
  
  ],
  providers: [DBService,ItshareApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
