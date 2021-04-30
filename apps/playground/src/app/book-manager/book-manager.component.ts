import { Component, OnInit } from '@angular/core';
import { BooksEntity } from '../+state/books.models';
import { BookManagerComponentStateService } from './book-manager-component-state.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss'],
  providers: [BookManagerComponentStateService],
})
export class BookManagerComponent implements OnInit {
  vm$ = this.state.vm$;

  constructor(private state: BookManagerComponentStateService) {}

  ngOnInit() {
    this.state.loadBooks();
  }

  toggleShowForm() {
    this.state.toggleShowForm();
  }

  selectTab(tabNo: number) {
    this.state.setSelectedTab(tabNo);
  }

  upsertBook(book: BooksEntity) {
    this.state.upsertBook(book);
  }

  selectBook(id: string) {
    this.state.selectBook(id);
  }
}
