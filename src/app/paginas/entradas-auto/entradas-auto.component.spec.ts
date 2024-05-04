import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasAutoComponent } from './entradas-auto.component';

describe('EntradasAutoComponent', () => {
  let component: EntradasAutoComponent;
  let fixture: ComponentFixture<EntradasAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradasAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
