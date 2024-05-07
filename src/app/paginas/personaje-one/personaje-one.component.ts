import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../../data/apiservice.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RickyMortyComponent } from '../ricky-morty/ricky-morty.component';
import { PersonajeOne } from '../../common/personaje-one';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-personaje-one',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RickyMortyComponent,FooterComponent],
  templateUrl: './personaje-one.component.html',
  styleUrl: './personaje-one.component.css'
})
export class PersonajeOneComponent  implements OnInit{

  personajeOne!: PersonajeOne;
  constructor(private apiService: APIServiceService,private activatedRouter: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.loadpersonajeOne();
  }
  loadpersonajeOne(){
    const id = this.activatedRouter.snapshot.params['id']
    this.apiService.getpersonajeOne(id).subscribe(
      {
        next: (data) =>{
          if (data === null || data === undefined) {
            console.error('data is null or undefined');
            return;
          }
          this.personajeOne = data;
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
  cambiaChar(id: number){
    if(id>0 && id <= 827){
      this.router.navigateByUrl('/perone' + id).then(()=>this.loadpersonajeOne())
    }
  }
}
