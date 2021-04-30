import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-form-checkbox',
  templateUrl: './show-form-checkbox.component.html',
  styleUrls: ['./show-form-checkbox.component.scss'],
})
export class ShowFormCheckboxComponent {
  @Input() checked: boolean;
  @Input() updateMode: boolean;

  @Output() changed = new EventEmitter<boolean>();

  handleChange() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
