import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickyMorty } from '../common/ricky-morty';
import { PersonajeOne } from '../common/personaje-one';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  constructor(private http: HttpClient) { }
  //interfaz rickymorty
  //direcion sacada de internet
  private urlApi = "https://rickandmortyapi.com/api/character/"
  getPersonajesRyM(): Observable<RickyMorty>{
    return this.http.get<RickyMorty>(this.urlApi)
  }
  getpersonajeOne(id:number): Observable<PersonajeOne>{
    return this.http.get<PersonajeOne>(this.urlApi + id)
  }
}

