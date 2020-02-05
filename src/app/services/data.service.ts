import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';


const url = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  rechercheParNom(nom: string): Observable<Collegue[]> {
    return this.httpClient.get<Collegue[]>(url + '?nom=' + nom);
  }



}
