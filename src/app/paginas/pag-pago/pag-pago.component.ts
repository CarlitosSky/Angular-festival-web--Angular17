import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PagoFormularioComponent } from '../pago-formulario/pago-formulario.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pag-pago',
  standalone: true,
  imports: [RouterLink,RouterModule,FooterComponent,PagoFormularioComponent],
  templateUrl: './pag-pago.component.html',
  styleUrl: './pag-pago.component.css'
})
export class PagPagoComponent {

}
