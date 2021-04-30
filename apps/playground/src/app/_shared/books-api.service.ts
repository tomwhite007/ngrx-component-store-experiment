import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksEntity } from '../+state/books.models';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<BooksEntity[]>('assets/initial-book-records.json');
  }
}
