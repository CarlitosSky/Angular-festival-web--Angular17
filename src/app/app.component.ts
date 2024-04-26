import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './paginas/footer/footer.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { BannerComponent } from './paginas/banner/banner.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,BannerComponent,PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final_proyect';
}
