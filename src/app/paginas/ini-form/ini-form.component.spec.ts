import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniFormComponent } from './ini-form.component';

describe('IniFormComponent', () => {
  let component: IniFormComponent;
  let fixture: ComponentFixture<IniFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
