import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';

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

  vm$ = combineLatest([this.books.allBooks$, this.localState$]).pipe(
    map(([allbooks, localState]) => ({ allbooks, ...localState }))
  );

  constructor(private books: BooksFacade) {}

  showFormToggle() {
    this.localState$.next({
      ...this.localState$.value,
      showForm: !this.localState$.value.showForm,
    });
  }

  selectTab(tabNo: number) {
    this.localState$.next({
      ...this.localState$.value,
      selectedTab: tabNo,
    });
  }

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
