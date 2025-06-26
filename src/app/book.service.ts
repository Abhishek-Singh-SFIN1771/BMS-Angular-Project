import { Injectable } from '@angular/core';
import { Book } from './Model/Book.component';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService 
{
  private bookList: Book[] = [];

  constructor(private http: HttpClient)
  {
   this.loadInitialBooks();
  }

  loadInitialBooks() 
  {
     this.http.get<Book[]>('books.json')
      .pipe(
        tap((booksFromJson: Book[]) => {
          this.bookList = [...booksFromJson]; // set initial books from JSON
        })
      )
      .subscribe(); // actually trigger the HTTP request
  }

 
  addBook(book: Book): void 
  {
    this.bookList.push(book);  
  }

  getBook(): Book[] 
  {
    return [...this.bookList];
  }
}
