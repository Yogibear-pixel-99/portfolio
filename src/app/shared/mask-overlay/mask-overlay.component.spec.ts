import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskOverlayComponent } from './mask-overlay.component';

describe('MaskOverlayComponent', () => {
  let component: MaskOverlayComponent;
  let fixture: ComponentFixture<MaskOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
