import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { RechercheNomComponent } from '../recherche-nom/recherche-nom.component';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  affichage = false;

  collegue: Collegue = {};
  isHidden = true;
  email: string;
  msgModif: string;

  constructor(private dataService: DataService) {
    console.log(this.collegue);
  }

  ngOnInit() {

    this.dataService.action.subscribe((data: Collegue) => {
      this.affichage = true;
      this.collegue = data;
      this.msgModif = '';
    });
  }

  emailchange(value: string) {
    this.email = value;
  }

  modifier() {

    this.isHidden = !this.isHidden;

  }

  sendModifier(etatForm: NgForm) {
    this.dataService.modifierCollegue(this.collegue).subscribe((msg: string) => {
      this.msgModif = msg;
      etatForm.reset();
      this.collegue = {};
      this.modifier();
      this.affichage = false;

    }, error => this.msgModif = error);
  }

  creer() { console.log('Création d\'un nouveau collègue'); }


}
