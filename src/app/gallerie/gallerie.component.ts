import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {


  listePhoto: Photo[];

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.listePhotos().subscribe((data: Photo[]) => {
      this.listePhoto = data;
    }, error => console.log(error));

  }



}
