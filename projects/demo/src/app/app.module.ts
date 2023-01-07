import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonModule } from 'projects/custom-button/src/public-api';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
