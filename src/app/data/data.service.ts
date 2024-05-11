import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { productos } from '../common/productos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  getproductos(): Observable<any>{
    return this.http.get('/assets/data/data.json')
  }
}
