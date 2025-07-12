import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() viewToggle = new EventEmitter<boolean>(); // NEW
  isListView = false; // false = grid view, true = list view

  searchText: string = '';
  showProfileMenu: boolean = false;
loggedInUser: { email: string; firstName: string; lastName: string } | null = null;


 ngOnInit() {
  const user:any = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(user);
    console.log('Logged in user:', userData);
    this.loggedInUser = userData;
  
}
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  toggleView() {
    this.isListView = !this.isListView;
    this.viewToggle.emit(this.isListView);
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    location.href = '/login';
  }

  getEmailInitial(): string {
  if (this.loggedInUser && this.loggedInUser.email) {
    return this.loggedInUser.email.charAt(0).toUpperCase();
  }
  return '';
}

}
