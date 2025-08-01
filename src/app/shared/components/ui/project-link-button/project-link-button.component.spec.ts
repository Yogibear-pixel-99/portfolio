import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkButtonComponent } from './project-link-button.component';

describe('ProjectLinkButtonComponent', () => {
  let component: ProjectLinkButtonComponent;
  let fixture: ComponentFixture<ProjectLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLinkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
