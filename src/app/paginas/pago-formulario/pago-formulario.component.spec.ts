import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoFormularioComponent } from './pago-formulario.component';

describe('PagoFormularioComponent', () => {
  let component: PagoFormularioComponent;
  let fixture: ComponentFixture<PagoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
