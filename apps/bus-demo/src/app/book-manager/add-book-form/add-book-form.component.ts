import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksEntity } from '../../+state/books.models';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBookFormComponent {
  @Input() showForm: boolean;
  @Input() set selectedBook(book: BooksEntity | null) {
    if (book) {
      this.formGroup.setValue(book);
      this.buttonText = 'Update book';
      this.formGroup.controls.id.disable();
    } else {
      this.formGroup.reset();
      this.buttonText = 'Add book';
      this.formGroup.controls.id.enable();
    }
  }
  @Output() submittedBook: EventEmitter<BooksEntity> = new EventEmitter();

  formGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
  });

  buttonText = 'Add book';

  submit() {
    this.submittedBook.emit(this.formGroup.getRawValue());
  }
}
