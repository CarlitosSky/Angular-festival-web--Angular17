import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntradasComponent } from '../entradas/entradas.component';
import { FooterComponent } from '../footer/footer.component';
import { CantantesComponent } from '../cantantes/cantantes.component';
import { Productos1Component } from '../productos-1/productos-1.component';
import { EntradasAutoComponent } from '../entradas-auto/entradas-auto.component';
import { PruebaEdyComponent } from '../pruebaEdy/pruebaEdy.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, EntradasComponent,FooterComponent,CantantesComponent,Productos1Component,EntradasAutoComponent,PruebaEdyComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
