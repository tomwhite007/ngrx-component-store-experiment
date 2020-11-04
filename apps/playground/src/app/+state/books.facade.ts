import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { BooksEntity } from './books.models';

import * as fromBooks from './books.reducer';
import * as BooksSelectors from './books.selectors';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksFacade {
  loaded$ = this.store.pipe(select(BooksSelectors.getBooksLoaded));
  allBooks$ = this.store.pipe(select(BooksSelectors.getAllBooks));
  selectedBooks$ = this.store.pipe(select(BooksSelectors.getSelected));

  constructor(private store: Store<fromBooks.BooksPartialState>) {}

  upsertBook(book: BooksEntity) {
    this.store.dispatch(BooksActions.updsertItem({ item: book }));
  }
}
