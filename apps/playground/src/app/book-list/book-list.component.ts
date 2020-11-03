import { Component, Input, OnInit } from '@angular/core';
import { BooksEntity } from '../+state/books.models';

@Component({
  selector: 'playground-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: BooksEntity[];
}
