import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { productos } from '../../common/productos';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-entradas-auto',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './entradas-auto.component.html',
  styleUrl: './entradas-auto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntradasAutoComponent implements OnInit {
products: productos[] = [];

constructor(private dataService: DataService,private cdRef:ChangeDetectorRef){}

ngOnInit(): void {
  this.loadproductos();
}
loadproductos(){
  this.dataService.getproductos().subscribe(
    {
      next: (data) =>{
        console.log(data)
        this.products = data.products
        this.cdRef.detectChanges();
      },
      error: err => {
        console.log(err)
      },
      complete: () =>{
        console.log('completado')
      }
    }
  )
}

}
