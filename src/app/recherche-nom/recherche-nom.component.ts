import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche-nom',
  templateUrl: './recherche-nom.component.html',
  styleUrls: ['./recherche-nom.component.css']
})
export class RechercheNomComponent implements OnInit {

  @Input()
  listeCollegue: Observable<Collegue[]>;

  rechercheHidden = false;

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  recherche(nom: string) {
    this.listeCollegue = this.data.rechercheParNom(nom);
  }

}
