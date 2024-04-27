import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pag-contacto',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NavbarComponent,FooterComponent],
  templateUrl: './pag-contacto.component.html',
  styleUrl: './pag-contacto.component.css'
})
export class PagContactoComponent {

}
