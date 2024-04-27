import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagRegistrarseComponent } from './pag-registrarse.component';

describe('PagRegistrarseComponent', () => {
  let component: PagRegistrarseComponent;
  let fixture: ComponentFixture<PagRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagRegistrarseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
