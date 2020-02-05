import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheNomComponent } from './recherche-nom/recherche-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheNomComponent
  ],
  imports: [
    BrowserModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
