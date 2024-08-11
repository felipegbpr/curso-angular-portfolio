import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlegdeComponent } from './knowlegde.component';

describe('KnowlegdeComponent', () => {
  let component: KnowlegdeComponent;
  let fixture: ComponentFixture<KnowlegdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowlegdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowlegdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
