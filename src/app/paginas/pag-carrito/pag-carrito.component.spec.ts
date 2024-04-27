import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCarritoComponent } from './pag-carrito.component';

describe('PagCarritoComponent', () => {
  let component: PagCarritoComponent;
  let fixture: ComponentFixture<PagCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
