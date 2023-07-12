import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramTemplatesComponent } from './instagram-templates.component';

describe('InstagramTemplatesComponent', () => {
  let component: InstagramTemplatesComponent;
  let fixture: ComponentFixture<InstagramTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
