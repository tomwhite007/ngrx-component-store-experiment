import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';

interface LocalState {
  showForm: boolean;
  selectedTab: number;
}

@Injectable()
export class AppComponentStateService extends ComponentStore<LocalState> {
  readonly vm$ = this.select(
    this.select((state) => state),
    this.books.allBooks$,
    (LocalState, allBooks) => ({ ...LocalState, allBooks })
  );

  constructor(private books: BooksFacade) {
    super({
      showForm: false,
      selectedTab: 0,
    });
  }

  readonly toggleShowForm = this.updater((state) => ({
    ...state,
    showForm: !state.showForm,
  }));

  readonly setSelectedTab = this.updater((state, tabNo: number) => ({
    ...state,
    selectedTab: tabNo,
  }));

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
