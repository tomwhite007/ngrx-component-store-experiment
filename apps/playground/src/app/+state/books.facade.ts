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
  selectedBook$ = this.store.pipe(select(BooksSelectors.getSelected));
  selectedId$ = this.store.pipe(select(BooksSelectors.getSelectedId));

  constructor(private store: Store<fromBooks.BooksPartialState>) {}

  loadBooks() {
    this.store.dispatch(BooksActions.loadBooks());
  }

  upsertBook(book: BooksEntity) {
    this.store.dispatch(BooksActions.updsertItem({ item: book }));
  }

  selectBook(id: string) {
    this.store.dispatch(BooksActions.selectId({ id }));
  }
}
