import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-talla',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,FooterComponent],
  templateUrl: './talla.component.html',
  styleUrl: './talla.component.css'
})
export class TallaComponent {

}
