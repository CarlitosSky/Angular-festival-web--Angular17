import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInicioSesionComponent } from './pag-inicio-sesion.component';

describe('PagInicioSesionComponent', () => {
  let component: PagInicioSesionComponent;
  let fixture: ComponentFixture<PagInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagInicioSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
