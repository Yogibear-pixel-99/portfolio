import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSentInfoComponent } from './form-sent-info.component';

describe('FormSentInfoComponent', () => {
  let component: FormSentInfoComponent;
  let fixture: ComponentFixture<FormSentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSentInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
