import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl = 'https://fundoonotes.incubation.bridgelabz.com/api/notes';

  constructor(private http: HttpClient) {}

  private getHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
  }

  createNote(data: any, token: string): Observable<any> {
    const url = `${this.baseUrl}/addNotes`;
    return this.http.post(url, data, { headers: this.getHeaders(token) });
  }

  getNotes(token: string): Observable<any> {
    const url = `${this.baseUrl}/getNotesList`;
    return this.http.get(url, { headers: this.getHeaders(token) });
  }

  archiveNote(noteIdList: string[], token: string): Observable<any> {
    const url = `${this.baseUrl}/archiveNotes`;
    const body = { noteIdList, isArchived: true };
    return this.http.post(url, body, { headers: this.getHeaders(token) });
  }

  trashNote(noteIdList: string[], token: string): Observable<any> {
    const url = `${this.baseUrl}/trashNotes`;
    const body = { noteIdList, isDeleted: true };
    return this.http.post(url, body, { headers: this.getHeaders(token) });
  }
}
