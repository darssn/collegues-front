import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Photo } from '../models/photo';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';


const url = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  action = new Subject<Collegue>();

  listeCollegueRecherche: Observable<Collegue[]>;
  colMatricule: Observable<Collegue>;

  constructor(private httpClient: HttpClient) { }



  rechercheParNom(nom: string): Observable<Collegue[]> {

    this.listeCollegueRecherche = this.httpClient.get<Collegue[]>(`${url}?nom=${nom}`);
    return this.listeCollegueRecherche;
  }

  rechercheParMatricule(matricule: string) {
    return this.httpClient.get<Collegue>(`${url}/${matricule}`)
      .pipe(
        tap((data: Collegue) => {
          this.action.next(data);
        })
      );
  }

  creerCollegue(collegue: Collegue) {

    return this.httpClient.post<string>(url, collegue, { responseType: 'text' as 'json' });

  }

  modifierCollegue(collegue: Collegue) {

    const modif = {
      email: collegue.email,
      photoUrl: collegue.photoUrl
    };

    return this.httpClient.patch<string>(`${url}/${collegue.matricule}`, modif, { responseType: 'text' as 'json' });
  }

  listePhotos() {

    return this.httpClient.get<Photo[]>(`${url}/photos`);

  }

  recupProfil(matricule: string) {
    return this.httpClient.get<Collegue>(`${url}/${matricule}`);
  }

}
