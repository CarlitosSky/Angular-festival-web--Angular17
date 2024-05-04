import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntradasComponent } from '../entradas/entradas.component';
import { FooterComponent } from '../footer/footer.component';
import { CantantesComponent } from '../cantantes/cantantes.component';
import { Productos1Component } from '../productos-1/productos-1.component';
import { EntradasAutoComponent } from '../entradas-auto/entradas-auto.component';
import { PruebaEdyComponent } from '../pruebaEdy/pruebaEdy.component';
import { CantanteAutoComponent } from '../cantanteAuto/cantanteAuto.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, EntradasComponent,FooterComponent,CantantesComponent,Productos1Component,EntradasAutoComponent,PruebaEdyComponent,CantanteAutoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PrincipalComponent implements OnInit {

  constructor(private cdRef:ChangeDetectorRef){}
  ngOnInit():void {
    this.cdRef.detectChanges();
  }


}
