import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheNomComponent } from './recherche-nom/recherche-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { FormsModule } from '@angular/forms';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { PageGallerieComponent } from './page-gallerie/page-gallerie.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheNomComponent,
    CreerCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    MenuComponentComponent,
    AccueilComponent,
    GallerieComponent,
    AproposComponent,
    PageGallerieComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
