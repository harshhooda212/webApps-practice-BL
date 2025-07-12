import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
showSidebar= false;
selectedSection= 'notes';
isListView = false;
 // Default to grid view
 
  ngOnInit() {
    // Any initialization logic can go here
  }

  onSectionChange(section: string) {
    this.selectedSection = section;
  }

  // Method to toggle the sidebar visibility

toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
    onViewToggle(viewAsList: boolean) {
    this.isListView = viewAsList;
  }

}
