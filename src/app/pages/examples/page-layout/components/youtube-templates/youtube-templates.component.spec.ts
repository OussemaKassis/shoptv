import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeTemplatesComponent } from './youtube-templates.component';

describe('YoutubeTemplatesComponent', () => {
  let component: YoutubeTemplatesComponent;
  let fixture: ComponentFixture<YoutubeTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
