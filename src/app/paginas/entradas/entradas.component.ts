import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Productos1Component } from '../productos-1/productos-1.component';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,Productos1Component],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css'
})
export class EntradasComponent {

}
