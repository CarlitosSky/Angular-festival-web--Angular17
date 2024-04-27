import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RegisFormComponent } from '../regis-form/regis-form.component';

@Component({
  selector: 'app-pag-registrarse',
  standalone: true,
  imports: [FooterComponent,RegisFormComponent],
  templateUrl: './pag-registrarse.component.html',
  styleUrl: './pag-registrarse.component.css'
})
export class PagRegistrarseComponent {

}
