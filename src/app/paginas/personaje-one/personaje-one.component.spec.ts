import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeOneComponent } from './personaje-one.component';

describe('PersonajeOneComponent', () => {
  let component: PersonajeOneComponent;
  let fixture: ComponentFixture<PersonajeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
