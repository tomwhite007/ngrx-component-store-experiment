import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BooksFacade } from '../+state/books.facade';
import { BookManagerComponentStateService } from './book-manager-component-state.service';

describe('BookManagerComponentStateService', () => {
  let service: BookManagerComponentStateService;

  beforeEach(() => {
    const mockFacade = {
      loaded$: of(true),
      allBooks$: of([]),
      selectedBook$: of(null),
      selectedId$: of(null),
    };

    TestBed.configureTestingModule({
      providers: [
        BookManagerComponentStateService,
        { provide: BooksFacade, useValue: mockFacade },
      ],
    });
    service = TestBed.inject(BookManagerComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
