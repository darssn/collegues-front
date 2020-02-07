import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-page-gallerie',
  templateUrl: './page-gallerie.component.html',
  styleUrls: ['./page-gallerie.component.css']
})
export class PageGallerieComponent implements OnInit {

  collegue: Collegue = {};

  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit() {



    this.dataService.recupProfil(this.route.snapshot.paramMap.get('matricule')).subscribe((collegue: Collegue) => {
      this.collegue = collegue;

    }, error => console.log(error));
  }


}
