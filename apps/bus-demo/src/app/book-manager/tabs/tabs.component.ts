import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() selectedTab: number;

  @Output() tabSelected = new EventEmitter<number>();

  selectTab(tab: number) {
    this.selectedTab = tab;
    this.tabSelected.emit(tab);
  }
}
