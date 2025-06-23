import { Injectable } from '@angular/core';
import { Book } from './Model/Book.component';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private bookList: Book[] = [];

  constructor(private http:HttpClient)
  {
     this.loadInitialBooks();
  }

  addBook(book: Book): void {
    this.bookList.push(book);
  }

  getBook(): Book[] {
    return [...this.bookList];
  }

 loadInitialBooks(): void {
    const sub = this.http.get<Book[]>('books.json')
      .pipe(
        tap((booksFromJson: Book[]) => {
          this.bookList = [...booksFromJson]; // set initial books from JSON
        })
      )
      .subscribe(() => { // actually trigger the HTTP request
        next: () => {
          sub.unsubscribe(); // unsubscibe after the data is loaded 
        }
      }); 
  }
}
