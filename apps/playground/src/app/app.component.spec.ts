import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ComponentStore } from '@ngrx/component-store';
import { of } from 'rxjs';
import { BooksFacade } from './+state/books.facade';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const mockFacade = {
      selectedBooks$: of([]),
      upsertBook: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: BooksFacade, useValue: mockFacade },
        ComponentStore,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Books App');
  });
});
