import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ProCartasComponent } from '../pro-cartas/pro-cartas.component';

@Component({
  selector: 'app-pag-productos',
  standalone: true,
  imports: [FooterComponent,ProCartasComponent],
  templateUrl: './pag-productos.component.html',
  styleUrl: './pag-productos.component.css'
})
export class PagProductosComponent {

}
