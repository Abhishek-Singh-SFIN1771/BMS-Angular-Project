import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { NgIf } from '@angular/common';
import { Book } from '../book-interface/book-interface.component';

@Component({
  selector: 'app-booklist',
  imports: [NgIf],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BooklistComponent {
  books: Book[] = [];
  selectedBook!: Book;
  detailBlock: boolean = false;

  // DI
  constructor(private bs: BookService) { }

  bookList() {
    this.detailBlock = true;
    this.books = this.bs.getBook();
  }

  showDetails(index: number): void {
    this.selectedBook = this.books[index];
  }
}
