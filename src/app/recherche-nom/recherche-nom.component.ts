import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recherche-nom',
  templateUrl: './recherche-nom.component.html',
  styleUrls: ['./recherche-nom.component.css']
})
export class RechercheNomComponent implements OnInit {

  @Input()
  listeMatricule: string[];

  rechercheHidden = false ;

  constructor() { }

  ngOnInit() {
  }

  recherche() {
    this.rechercheHidden = !this.rechercheHidden;
  }

}
