import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromBooks from './books.reducer';
import * as BooksSelectors from './books.selectors';

@Injectable()
export class BooksFacade {
  loaded$ = this.store.pipe(select(BooksSelectors.getBooksLoaded));
  allBooks$ = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBooks$ = this.store.pipe(select(BooksSelectors.getSelected));

  constructor(private store: Store<fromBooks.BooksPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
