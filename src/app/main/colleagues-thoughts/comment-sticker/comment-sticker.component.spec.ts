import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentStickerComponent } from './comment-sticker.component';

describe('CommentStickerComponent', () => {
  let component: CommentStickerComponent;
  let fixture: ComponentFixture<CommentStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentStickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
