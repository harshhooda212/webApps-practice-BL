import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit {
  @Input() isListView: boolean = false; // <-- NEW

 
  
  
  showColorOptions = false;
  selectedColor = '#ffffff';
  showSidebar= false;
selectedSection= 'notes';

  deletedNotes: { title: string; content: string; color: string }[] = [];

  ngOnInit(): void {
  const binData = localStorage.getItem('bin');
  if (binData) {
    this.deletedNotes = JSON.parse(binData);
    console.log("Loaded deleted notes:", this.deletedNotes); // Optional: for debugging
  } else {
    this.deletedNotes = [];
  }
}


  restoreNote(index: number) {
    const restoredNote = this.deletedNotes.splice(index, 1)[0];

    // Add back to notes
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.unshift(restoredNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Update bin
    localStorage.setItem('bin', JSON.stringify(this.deletedNotes));
  }

  deleteForever(index: number) {
    this.deletedNotes.splice(index, 1);
    localStorage.setItem('bin', JSON.stringify(this.deletedNotes));
  }


toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
    onViewToggle(viewAsList: boolean) {
    this.isListView = viewAsList;
  }


}
