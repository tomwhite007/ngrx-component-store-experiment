import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksEntity } from '../+state/books.models';

@Component({
  selector: 'playground-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookFormComponent {
  @Output() submittedBook: EventEmitter<BooksEntity> = new EventEmitter();

  formGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
  });

  submit() {
    this.submittedBook.emit(this.formGroup.value);
  }
}
