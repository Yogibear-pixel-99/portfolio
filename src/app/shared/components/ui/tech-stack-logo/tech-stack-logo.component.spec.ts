import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackLogoComponent } from './tech-stack-logo.component';

describe('TechStackLogoComponent', () => {
  let component: TechStackLogoComponent;
  let fixture: ComponentFixture<TechStackLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
