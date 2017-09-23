import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { GutenTagComponent } from './guten-tag/guten-tag.component';

import { BuongiornoService } from './buongiorno/buongiorno.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BonjourComponent,
    GutenTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ BuongiornoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
