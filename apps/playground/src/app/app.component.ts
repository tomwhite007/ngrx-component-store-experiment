import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BooksFacade } from './+state/books.facade';
import { BooksEntity } from './+state/books.models';
import { AppComponentStateService } from './app-component-state.service';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppComponentStateService],
})
export class AppComponent {
  vm$ = this.localState.vm$;

  constructor(
    private books: BooksFacade,
    private localState: AppComponentStateService
  ) {}

  toggleShowForm() {
    this.localState.toggleShowForm();
  }

  selectTab(tabNo: number) {
    this.localState.selectTab(tabNo);
  }

  upsertBook(book: BooksEntity) {
    this.books.upsertBook(book);
  }
}
