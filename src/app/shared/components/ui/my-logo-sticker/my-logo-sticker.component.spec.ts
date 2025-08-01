import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogoStickerComponent } from './my-logo-sticker.component';

describe('MyLogoStickerComponent', () => {
  let component: MyLogoStickerComponent;
  let fixture: ComponentFixture<MyLogoStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLogoStickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLogoStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
