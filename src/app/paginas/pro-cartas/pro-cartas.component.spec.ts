import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCartasComponent } from './pro-cartas.component';

describe('ProCartasComponent', () => {
  let component: ProCartasComponent;
  let fixture: ComponentFixture<ProCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
