import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStuffComponent } from './book-stuff.component';

describe('BookStuffComponent', () => {
  let component: BookStuffComponent;
  let fixture: ComponentFixture<BookStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
