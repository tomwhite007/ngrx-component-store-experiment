import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  vm$ = this.state.vm$;

  // one service injected for both component and global state
  constructor(private state: AppComponentStateService) {}

  toggleShowForm() {
    this.state.toggleShowForm();
  }

  selectTab(tabNo: number) {
    this.state.setSelectedTab(tabNo);
  }

  upsertBook(book: BooksEntity) {
    this.state.upsertBook(book);
  }
}
