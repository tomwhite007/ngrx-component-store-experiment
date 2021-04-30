import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormCheckboxComponent } from './show-form-checkbox.component';

describe('ShowFormCheckboxComponent', () => {
  let component: ShowFormCheckboxComponent;
  let fixture: ComponentFixture<ShowFormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowFormCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
