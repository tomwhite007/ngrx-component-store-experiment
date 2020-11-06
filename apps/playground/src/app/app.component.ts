import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store/src/component-store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';

interface ComponentState {
  allbooks: BooksEntity[];
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
  private localState$ = new BehaviorSubject({
    showForm: false,
    selectedTab: 0,
  });

  readonly vm$: Observable<ComponentState> = this.componentStore.select(
    (state) => state
  );

  constructor(
    private books: BooksFacade,
    private readonly componentStore: ComponentStore<ComponentState>
  ) {}

  readonly showFormToggle = this.componentStore.updater((state) => ({
    ...state,
    showForm: !this.localState$.value.showForm,
  }));

  readonly selectTab = this.componentStore.updater((state, tabNo: number) => ({
    ...state,
    selectedTab: tabNo,
  }));

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
