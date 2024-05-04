import { Cantantes } from './../../common/cantantes';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataCantantesService } from '../../data/data-cantantes.service';

@Component({
  selector: 'app-cantante-auto',
  standalone: true,
  imports: [CommonModule],
  template: `

  <section class="d-flex justify-content-center align-items-center px-5 row"  style="background-color:bisque">

      <div class="col-sm-12 col-md-4" *ngFor="let c of cantantes">
        <div class="" style="height:430px; width:auto; overflow: hidden;">
          <img [src]="c.imagen" class="card-img-top" alt="...">
        </div>
        <div class="text text-center " style="padding-bottom: 50px;">
          <h4 class="card-title">{{c.nombre}}</h4>
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
export class CantanteAutoComponent implements OnInit {
  //variables generales
  cantantes: Cantantes[] = [];

  constructor(private _dataservice: DataCantantesService) {}

  ngOnInit(): void {
    this.cargarCantantes();
  }

  cargarCantantes() {
    this._dataservice.getCantantes().subscribe((res: any) => {
      if (res) {
        this.cantantes = res.cantantes;
        console.log('res :>> ', this.cantantes);
      } else {
        console.log('error');
      }
    });
  }
}
