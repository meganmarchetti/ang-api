import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl = 'http://localhost:8082/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    const data = this.http.get(this.apiUrl);
    return data;
  }

  delBooks(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
    
  }

  postBooks(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  putBooks(book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${book.id}`, book);
  }
}
