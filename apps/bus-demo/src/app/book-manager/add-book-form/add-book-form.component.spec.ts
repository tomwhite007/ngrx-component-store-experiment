import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBookFormComponent } from './add-book-form.component';

describe('AddBookFormComponent', () => {
  let component: AddBookFormComponent;
  let fixture: ComponentFixture<AddBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
