import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { BooksEntity } from './books.models';
import { BooksEffects } from './books.effects';
import { BooksFacade } from './books.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BOOKS_FEATURE_KEY, reducer } from './books.reducer';

describe('BooksFacade', () => {
  let facade: BooksFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          HttpClientTestingModule,
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
