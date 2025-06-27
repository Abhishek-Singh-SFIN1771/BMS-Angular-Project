import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, tap } from 'rxjs';
import { Book } from './book-interface/book-interface.component';

@Injectable({
  providedIn: 'root'
})

export class BookService 
{
  private bookList: Book[] = [];
  private bookSubscription: Subscription | undefined;

  constructor(private http: HttpClient)
  {
   this.loadInitialBooks();
  }

  loadInitialBooks(): void
  {
     this.bookSubscription = this.http.get<Book[]>('books.json')
      .pipe(
        tap((booksFromJson: Book[]) => {
          this.bookList = [...booksFromJson]; // set initial books from JSON
        })
      )
      .subscribe(); // actually trigger the HTTP request
  }

  ngOnDestroy(): void
  {
    if(this.bookSubscription)
      {
        this.bookSubscription.unsubscribe(); // prevents memory leak
      }
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
