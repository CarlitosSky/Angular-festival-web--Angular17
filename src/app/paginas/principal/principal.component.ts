import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntradasComponent } from '../entradas/entradas.component';
import { FooterComponent } from '../footer/footer.component';
import { CantantesComponent } from '../cantantes/cantantes.component';
import { Productos1Component } from '../productos-1/productos-1.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, EntradasComponent,FooterComponent,CantantesComponent,Productos1Component],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
