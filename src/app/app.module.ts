import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeInputComponent } from './time-input/time-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TimeInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
