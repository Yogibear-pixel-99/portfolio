import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInContactButtonComponent } from './get-in-contact-button.component';

describe('GetInContactButtonComponent', () => {
  let component: GetInContactButtonComponent;
  let fixture: ComponentFixture<GetInContactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInContactButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInContactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
