import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCantantesService {

  constructor(private http: HttpClient) { }

getCantantes(): Observable<any>{
  return this.http.get('/assets/data/dataCantantes.json')
  }
}
