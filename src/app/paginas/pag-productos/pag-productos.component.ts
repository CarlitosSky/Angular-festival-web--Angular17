import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ProductosAutomaticosComponent } from '../productosAutomaticos/productosAutomaticos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pag-productos',
  standalone: true,
  imports: [FooterComponent,ProductosAutomaticosComponent,RouterLinkActive,RouterLink],
  templateUrl: './pag-productos.component.html',
  styleUrl: './pag-productos.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush

})



export class PagProductosComponent implements OnInit {

  constructor(private cdRef:ChangeDetectorRef){}



  ngOnInit():void {

    this.cdRef.detectChanges();


  }


}
