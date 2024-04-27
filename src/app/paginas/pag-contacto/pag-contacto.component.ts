import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ConFormularioComponent } from '../con-formulario/con-formulario.component';
import { ConPresentacionComponent } from '../con-presentacion/con-presentacion.component';

@Component({
  selector: 'app-pag-contacto',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NavbarComponent,FooterComponent,ConFormularioComponent,ConPresentacionComponent
  ],
  templateUrl: './pag-contacto.component.html',
  styleUrl: './pag-contacto.component.css'
})
export class PagContactoComponent {

}
