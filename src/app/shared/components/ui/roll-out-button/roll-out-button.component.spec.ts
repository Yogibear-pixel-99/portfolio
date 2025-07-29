import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollOutButtonComponent } from './roll-out-button.component';

describe('RollOutButtonComponent', () => {
  let component: RollOutButtonComponent;
  let fixture: ComponentFixture<RollOutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollOutButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
