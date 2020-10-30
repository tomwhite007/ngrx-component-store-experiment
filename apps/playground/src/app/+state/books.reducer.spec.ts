import { BooksEntity } from './books.models';
import * as BooksActions from './books.actions';
import { State, initialState, reducer } from './books.reducer';
import { createBooksEntity } from './books.spec.helper';

describe('Books Reducer', () => {
  describe('valid Books actions', () => {
    it('loadBooksSuccess should return set the list of known Books', () => {
      const books = [
        createBooksEntity('PRODUCT-AAA'),
        createBooksEntity('PRODUCT-zzz'),
      ];
      const action = BooksActions.loadBooksSuccess({ books });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
