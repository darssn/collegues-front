import { Component } from '@angular/core';
import {col1} from './mock/collegues.mock';
import {listeMatricule} from './mock/matricules.mock';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'collegues-front';

  unCollegue = col1;

  listeMatricule = listeMatricule;


}
