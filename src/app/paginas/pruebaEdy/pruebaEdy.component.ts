import { Entradas } from './../../common/entradas';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { DataEntradasService } from '../../data/data-entradas.service';

@Component({
  selector: 'app-prueba-edy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="d-flex justify-content-center align-items-center px-5 row"  style="background-color:bisque">

      <div class="col-sm-12 col-md-4" *ngFor="let e of entradas">
        <div class="" style="height:230px; width:auto; overflow: hidden;">
          <img [src]="e.imagen" class="card-img-top" alt="..." />
        </div>
        <div class="card- ps-3">
          <h4 class="card-title">{{ e.titulo }}</h4>
          <p class="card-text">{{ e.descripcion }}</p>
          <button class="btn-sm btn btn-primary">{{ e.botonTxt }}</button>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaEdyComponent implements OnInit {
  //variables globales
  entradas: Entradas[] = [];

  constructor(private _dataService: DataEntradasService) {}

  ngOnInit(): void {
    this.cargarEntradas();
  }

  cargarEntradas() {
    this._dataService.getEntradas().subscribe((res: any) => {
      if (res) {
        this.entradas = res.entradas;
        console.log('res :>> ', this.entradas);
      } else {
        console.log('error');
      }
    });
  }
}
