import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConFormularioComponent } from './con-formulario.component';

describe('ConFormularioComponent', () => {
  let component: ConFormularioComponent;
  let fixture: ComponentFixture<ConFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
