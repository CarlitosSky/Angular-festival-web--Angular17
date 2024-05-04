import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataProductosPaginaService {

  constructor(private http: HttpClient) { }

  getProductosPagina(): Observable<any> {
    return this.http.get('/assets/data/dataProductos.json');
  }

}
