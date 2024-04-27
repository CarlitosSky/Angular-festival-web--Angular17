import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConPresentacionComponent } from './con-presentacion.component';

describe('ConPresentacionComponent', () => {
  let component: ConPresentacionComponent;
  let fixture: ComponentFixture<ConPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConPresentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
