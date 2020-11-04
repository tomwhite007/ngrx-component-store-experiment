import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { BooksEntity } from './books.models';
import { BooksEffects } from './books.effects';
import { BooksFacade } from './books.facade';

import * as BooksSelectors from './books.selectors';
import * as BooksActions from './books.actions';
import {
  BOOKS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './books.reducer';
import { createBooksEntity } from './books.spec.helper';

interface TestSchema {
  books: State;
}

describe('BooksFacade', () => {
  let facade: BooksFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BOOKS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BooksEffects]),
        ],
        providers: [BooksFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.get(BooksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('should upsert one book', async (done) => {
      try {
        let list = await readFirst(facade.allBooks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        const book: BooksEntity = { id: '123', title: 'test' };

        facade.upsertBook(book);

        list = await readFirst(facade.allBooks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(1);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
