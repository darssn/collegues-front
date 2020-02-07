import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  collegue: Collegue = {};
  retour: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  creerCollegue(form: NgForm) {
    this.data.creerCollegue(this.collegue).subscribe((message: string) => {
      this.retour = message;
      form.reset();
    }, error => this.retour = error);
  }

}
