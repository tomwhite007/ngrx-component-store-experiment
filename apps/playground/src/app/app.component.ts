import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  vm$ = new BehaviorSubject({
    showForm: false,
  });

  title = 'playground';

  showFormToggle() {
    this.vm$.next({
      ...this.vm$.value,
      showForm: !this.vm$.value.showForm,
    });
  }
}
