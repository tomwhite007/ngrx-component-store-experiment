import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LocalState {
  showForm: boolean;
  selectedTab: number;
}
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

@Injectable()
export class AppComponentStateService extends ComponentStore<LocalState> {
  readonly vm$ = this.select(
    this.select((state) => state),
    this.books.allBooks$,
    (LocalState, allBooks) => ({ ...LocalState, allBooks })
  );

  readonly selectedTab$ = this.select((state) => state.selectedTab);

  constructor(private books: BooksFacade) {
    super({
      showForm: false,
      selectedTab: 0,
    });
  }

  // Updaters

  readonly toggleShowForm = this.updater((state) => ({
    ...state,
    showForm: !state.showForm,
  }));

  readonly setSelectedTab = this.updater((state, tabNo: number) => ({
    ...state,
    selectedTab: tabNo,
  }));

  // Effects

  readonly updateGoogleAnalyticsWithTabSelected = this.effect(
    (selectedTab$: Observable<number>) => {
      return selectedTab$.pipe(
        tap((tab) => {
          window.dataLayer = window.dataLayer || [];
          // fake Google Analytics event
          window.dataLayer.push({
            event: 'tabSelected',
            value: tab,
          });

          console.log('window.dataLayer', window.dataLayer);
        })
      );
    }
  )(this.selectedTab$);

  // Global state

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
