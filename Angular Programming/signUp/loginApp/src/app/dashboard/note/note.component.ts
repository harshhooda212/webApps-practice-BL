import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   @Input() isListView: boolean = false;
  isExpanded = false;
  title = '';
  content = '';
  showColorOptions = false;
  selectedColor = '#ffffff';
  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getAllNotes();
  }

  expandNote() {
    this.isExpanded = true;
  }

  closeNote() {
    if (this.title.trim() || this.content.trim()) {
      const notePayload = {
        title: this.title,
        description: this.content,
        color: this.selectedColor
      };

      this.noteService.createNote({ note: [notePayload] }).subscribe({
        next: () => {
          this.getAllNotes();
          this.resetNote();
        },
        error: err => console.error('Error creating note:', err)
      });
    } else {
      this.resetNote();
    }
  }

  resetNote() {
    this.title = '';
    this.content = '';
    this.selectedColor = '#ffffff';
    this.isExpanded = false;
    this.showColorOptions = false;
  }

  getAllNotes() {
    this.noteService.getNotes().subscribe({
      next: res => {
        this.notes = res.data.data.filter((note: any) => !note.isArchived && !note.isDeleted);
      },
      error: err => console.error('Error fetching notes:', err)
    });
  }

  archiveNote(noteId: string) {
    this.noteService.archiveNote(noteId).subscribe({
      next: () => this.getAllNotes(),
      error: err => console.error('Error archiving note:', err)
    });
  }

  deleteNote(noteId: string) {
    this.noteService.deleteNote(noteId).subscribe({
      next: () => this.getAllNotes(),
      error: err => console.error('Error deleting note:', err)
    });
  }

  changeColor(color: string) {
    this.selectedColor = color;
    this.showColorOptions = false;
  }

  toggleColorOptions() {
    this.showColorOptions = !this.showColorOptions;
  }
}
