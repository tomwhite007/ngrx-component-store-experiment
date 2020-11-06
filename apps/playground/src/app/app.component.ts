import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';

interface LocalState {
  showForm: boolean;
  selectedTab: number;
}

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends ComponentStore<LocalState> {
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

  readonly showFormToggle = this.updater((state) => ({
    ...state,
    showForm: !state.showForm,
  }));

  readonly selectTab = this.updater((state, tabNo: number) => ({
    ...state,
    selectedTab: tabNo,
  }));

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
