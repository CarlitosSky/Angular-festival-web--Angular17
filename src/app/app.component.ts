import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './paginas/footer/footer.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { BannerComponent } from './paginas/banner/banner.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { Productos1Component } from './paginas/productos-1/productos-1.component';
import { EntradasComponent } from './paginas/entradas/entradas.component';
import { CantantesComponent } from './paginas/cantantes/cantantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,FooterComponent,NavbarComponent,BannerComponent,PrincipalComponent,Productos1Component,EntradasComponent,CantantesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final_proyect';
}
