import { Injectable } from '@angular/core';
import { Book } from './Model/Book.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 private bookList: Book[] = [];
  
  addBook(book: Book): void 
  {
    this.bookList.push(book);
  }

  getBook(): Book[]
  {
    return [...this.bookList];
  }
}
