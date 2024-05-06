import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituProductosComponent } from './titu-productos.component';

describe('TituProductosComponent', () => {
  let component: TituProductosComponent;
  let fixture: ComponentFixture<TituProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
