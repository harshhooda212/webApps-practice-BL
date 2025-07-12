import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Input() isListView: boolean = false; // <-- NEW

  isExpanded = false;
  title = '';
  content = '';
  showColorOptions = false;
  selectedColor = '#ffffff';
  showSidebar= false;
selectedSection= 'notes';
  notes: { title: string; content: string;color:string;archived:boolean }[] = [];

ngOnInit() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    this.notes = JSON.parse(savedNotes).filter((note: any) => note.archived);
  }
}


  expandNote() {
    this.isExpanded = true;
  }

  closeNote() {
  if (this.title.trim() || this.content.trim()) {
    this.notes.unshift({ title: this.title, content: this.content, color: this.selectedColor, archived: false });
    this.updateLocalStorage();
  }
  this.title = '';
  this.content = '';
  this.selectedColor = '#ffffff';
  this.isExpanded = false;
  this.showColorOptions = false; 
  this.notes.unshift({
  title: this.title,
  content: this.content,
  color: this.selectedColor,
  archived: false
});

}

deleteArchivedNote(index: number) {
  const noteToDelete = this.notes.splice(index, 1)[0];

  // Move to bin
  const bin = JSON.parse(localStorage.getItem('bin') || '[]');
  bin.unshift(noteToDelete);
  localStorage.setItem('bin', JSON.stringify(bin));

  // Remove from localStorage notes
  const allNotes = JSON.parse(localStorage.getItem('notes') || '[]');
  const updatedNotes = allNotes.filter((note: any) => {
    return !(note.archived && note.title === noteToDelete.title && note.content === noteToDelete.content);
  });

  localStorage.setItem('notes', JSON.stringify(updatedNotes));
}




  updateLocalStorage() {
    const existingNotes = JSON.parse(localStorage.getItem('notes') || '[]');

  // Keep non-archived notes
  const activeNotes = existingNotes.filter((n: any) => !n.archived);

  // Merge updated archived notes with active notes
  const updatedNotes = [...activeNotes, ...this.notes];

  localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  changeColor(color: string) {
    this.selectedColor = color;
    this.showColorOptions =false;
  }
  toggleColorOptions() {
  this.showColorOptions = !this.showColorOptions;
}
unarchiveNote(index: number): void {
  const noteToUnarchive = this.notes[index];
  noteToUnarchive.archived = false;

  const allNotes = JSON.parse(localStorage.getItem('notes') || '[]');
  const updatedNotes = allNotes.map((n: any) => {
    if (n.title === noteToUnarchive.title && n.content === noteToUnarchive.content) {
      return { ...n, archived: false };
    }
    return n;
  });

  localStorage.setItem('notes', JSON.stringify(updatedNotes));
  this.notes = updatedNotes.filter((n: any) => n.archived); // Show only archived
}

toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
    onViewToggle(viewAsList: boolean) {
    this.isListView = viewAsList;
  }


}
