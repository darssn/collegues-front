import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input()
  col: Collegue;

  isHidden = true;

  email: string;

  constructor() {}

  ngOnInit() {
  }

emailchange(value: string) {
this.email = value;
}

  modifier() {
    console.log('Modification du collègue');
    this.isHidden = !this.isHidden;

  }

  creer() {console.log('Création d\'un nouveau collègue'); }


}
