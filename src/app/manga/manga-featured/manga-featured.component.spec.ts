import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaFeaturedComponent } from './manga-featured.component';

describe('MangaFeaturedComponent', () => {
  let component: MangaFeaturedComponent;
  let fixture: ComponentFixture<MangaFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
