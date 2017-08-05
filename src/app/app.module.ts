import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }	from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start.component';
import { PortComponent } from './port.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
