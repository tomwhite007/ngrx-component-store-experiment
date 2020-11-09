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
export class AppComponent {
  readonly vm$ = this.componentStore.select(
    this.componentStore.select((state) => state),
    this.books.allBooks$,
    (LocalState, allBooks) => ({ ...LocalState, allBooks })
  );

  constructor(
    private books: BooksFacade,
    private componentStore: ComponentStore<LocalState>
  ) {
    this.componentStore.setState({
      showForm: false,
      selectedTab: 0,
    });
  }

  readonly showFormToggle = this.componentStore.updater((state) => ({
    ...state,
    showForm: !state.showForm,
  }));

  readonly selectTab = this.componentStore.updater((state, tabNo: number) => ({
    ...state,
    selectedTab: tabNo,
  }));

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
