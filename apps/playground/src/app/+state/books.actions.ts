import { createAction, props } from '@ngrx/store';
import { BooksEntity } from './books.models';

export const loadBooks = createAction('[Books] Load Books');

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: BooksEntity[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const updsertItem = createAction(
  '[AppComponent] Update Item',
  props<{ item: BooksEntity }>()
);
