import { Component, OnInit } from '@angular/core';
import { RickyMorty } from '../../common/ricky-morty';
import { APIServiceService } from '../../data/apiservice.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PersonajeOneComponent } from '../personaje-one/personaje-one.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ricky-morty',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FooterComponent],
  templateUrl: './ricky-morty.component.html',
  styleUrl: './ricky-morty.component.css'
})
export class RickyMortyComponent implements OnInit{

  personajesRyM!: RickyMorty;
  constructor(private apiService: APIServiceService){}
  ngOnInit(): void {
    this.loadpersonajesRyM();
  }
  loadpersonajesRyM(){
    this.apiService.getPersonajesRyM().subscribe(
      {
        next: (data) =>{
          this.personajesRyM = data
        },
        error: err => {
        },
        complete: () =>{
        }
      }
    )
  }



}
