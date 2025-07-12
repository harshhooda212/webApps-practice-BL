import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  isExpanded: boolean = false;
  isListView = false;
  showSidebar = false;

  title: string = '';
  description: string = '';

  
  constructor(private http: HttpClient) {}


  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  onViewToggle(viewAsList: boolean) {
    this.isListView = viewAsList;
  }

  expandNote() {
    this.isExpanded = true;
  }
  note = {
  title: '',
  description: ''
};
closeNote() {
  const token = localStorage.getItem('token');
  console.log("🔑 Token:", token);

  if (!token) {
    alert("Token missing. Please login again.");
    return;
  }

  const headers = new HttpHeaders({
    'Authorization':  `${token}`,
    'Content-Type': 'application/json'
  });

  const requestBody = {
   
      
        title: 'kimp',
        description: 'jm ',
          
      
    
  };

  console.log("📦 Request Body:", requestBody);

  this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', requestBody, { headers })
    .subscribe({
      next: (res) => {
        console.log("✅ API Success:", res);
        alert("Note added successfully!");
        this.resetNote();
      },
      error: (err) => {
        console.error("❌ API Error:", err);
        alert("Failed to add note.");
      }
    });
}


  resetNote() {
    this.title = '';
    this.description = '';
    this.isExpanded = false;
  }

}