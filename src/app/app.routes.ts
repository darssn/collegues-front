import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { PageGallerieComponent } from './page-gallerie/page-gallerie.component';

export const ROUTES: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'gallerie/:matricule', component: PageGallerieComponent},
  { path: 'apropos', component: AproposComponent },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },

];
