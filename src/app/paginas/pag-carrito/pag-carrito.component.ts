import { Component } from '@angular/core';
import { CarritoFormComponent } from '../carrito-form/carrito-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pag-carrito',
  standalone: true,
  imports: [CarritoFormComponent,FooterComponent],
  templateUrl: './pag-carrito.component.html',
  styleUrl: './pag-carrito.component.css'
})
export class PagCarritoComponent {

}
