import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'https://fundoonotes.incubation.bridgelabz.com/api/notes';

  constructor(private http: HttpClient) {}

  addNote(title: string, description: string): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("❌ Token missing in localStorage");
      return throwError(() => new Error("Unauthorized"));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // ✅ Correct format
      'Content-Type': 'application/json'
    });

    const body = {
      note: [
        {
          title: title,
          description: description,
          color: "",
          isArchived: false,
          isDeleted: false,
          isPinned: false
        }
      ]
    };

    return this.http.post(`${this.apiUrl}/addNotes`, body, { headers });
  }
}
