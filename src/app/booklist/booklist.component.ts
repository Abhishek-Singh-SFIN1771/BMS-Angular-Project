import { Component } from '@angular/core';
import { Book } from '../Model/Book.component';
import { BookService } from '../book.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booklist',
  imports: [NgIf],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent 
{
  books: Book[] = [];
 selectedBook!: Book

 // DI
 constructor(private bs: BookService)
 {}

 ngOnInit(): void
 {
  this.books = this.bs.getBook();
 }

 showDetails(index: number): void
 {
  this.selectedBook = this.books[index];
 }
}
