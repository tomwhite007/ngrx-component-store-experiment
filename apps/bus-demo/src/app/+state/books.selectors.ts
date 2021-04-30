import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOOKS_FEATURE_KEY,
  State,
  BooksPartialState,
  booksAdapter,
} from './books.reducer';

// Lookup the 'Books' feature state managed by NgRx
export const getBooksState = createFeatureSelector<BooksPartialState, State>(
  BOOKS_FEATURE_KEY
);

const { selectAll, selectEntities } = booksAdapter.getSelectors();

export const getBooksLoaded = createSelector(
  getBooksState,
  (state: State) => state.loaded
);

export const getBooksError = createSelector(
  getBooksState,
  (state: State) => state.error
);

export const getAllBooks = createSelector(getBooksState, (state: State) =>
  selectAll(state)
);

export const getBooksEntities = createSelector(getBooksState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getBooksState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBooksEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
