import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'playground-book-stuff',
  templateUrl: './book-stuff.component.html',
  styleUrls: ['./book-stuff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookStuffComponent {}
