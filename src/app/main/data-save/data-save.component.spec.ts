import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSaveComponent } from './data-save.component';

describe('DataSaveComponent', () => {
  let component: DataSaveComponent;
  let fixture: ComponentFixture<DataSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
