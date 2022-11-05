import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationMalilComponent } from './verification-malil.component';

describe('VerificationMalilComponent', () => {
  let component: VerificationMalilComponent;
  let fixture: ComponentFixture<VerificationMalilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationMalilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationMalilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
