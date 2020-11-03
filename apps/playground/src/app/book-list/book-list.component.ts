import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BooksEntity } from '../+state/books.models';

@Component({
  selector: 'playground-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() books: BooksEntity[];
}
