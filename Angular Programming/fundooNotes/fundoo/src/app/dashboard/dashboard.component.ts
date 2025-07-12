import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isListView =false;
  showSidebar=false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
    onViewToggle(viewAsList: boolean) {
    this.isListView = viewAsList;
  }
}
