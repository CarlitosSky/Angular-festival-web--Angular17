import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { IniFormComponent } from '../ini-form/ini-form.component';

@Component({
  selector: 'app-pag-inicio-sesion',
  standalone: true,
  imports: [FooterComponent,IniFormComponent],
  templateUrl: './pag-inicio-sesion.component.html',
  styleUrl: './pag-inicio-sesion.component.css'
})
export class PagInicioSesionComponent {

}
