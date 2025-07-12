import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  @Input() isExpanded = false; // Comes from parent

  @Output() toggleSidebar = new EventEmitter<void>(); // Emits to parent
  
  onToggle() {
    this.toggleSidebar.emit();

  
  }
  onMouseEnter(): void {
    this.isExpanded = true;
  }

  onMouseLeave(): void {
    this.isExpanded = false;
  }
  
constructor(private router: Router) {}

navigateTo(section: string) {
  this.router.navigate(['/dashboard/archive']);
}

navigateToNotes() {
  this.router.navigate(['/dashboard/note']);
}

navigateToBin() {
  this.router.navigate(['/dashboard/delete']);
}

}
