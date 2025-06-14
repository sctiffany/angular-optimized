import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSquare } from './image-square';

describe('ImageSquare', () => {
  let component: ImageSquare;
  let fixture: ComponentFixture<ImageSquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSquare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
