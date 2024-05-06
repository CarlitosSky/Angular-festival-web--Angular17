import { Entradas } from '../../common/entradas';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { DataEntradasService } from '../../data/data-entradas.service';
import { EntradasComponent } from '../entradas/entradas.component';

@Component({
  selector: 'app-prueba-edy',
  standalone: true,
  imports: [CommonModule,EntradasComponent],
  template: `


<app-entradas/>
    <section class="d-flex justify-content-center align-items-center px-5 row"  style="background-color:bisque; margin-top:-100px" >

      <div class="col-sm-12 col-md-4" *ngFor="let e of entradas">
        <div class="" style="height:300px; width:auto; overflow: hidden;">
          <img [src]="e.imagen" class="card-img-top" alt="..." />
        </div>
        <div class="card- ps-3" style="padding-bottom: 50px;">
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

  constructor(private _dataService: DataEntradasService,private cdRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargarEntradas();
  }

  cargarEntradas() {
    this._dataService.getEntradas().subscribe((res: any) => {
      if (res) {
        this.entradas = res.entradas;
        this.cdRef.detectChanges();
        console.log('res :>> ', this.entradas);
      } else {
        console.log('error');
      }
    });
  }
}
