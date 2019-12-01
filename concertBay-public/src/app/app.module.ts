import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AppModule { }
