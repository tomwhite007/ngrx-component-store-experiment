import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as BooksActions from './books.actions';
import { BooksApiService } from '../_shared/books-api.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      switchMap(() => this.api.getBooks()),
      map((res) => BooksActions.loadBooksSuccess({ books: res })),
      catchError((error: unknown) =>
        of(BooksActions.loadBooksFailure({ error }))
      )
    )
  );

  constructor(private actions$: Actions, private api: BooksApiService) {}
}
