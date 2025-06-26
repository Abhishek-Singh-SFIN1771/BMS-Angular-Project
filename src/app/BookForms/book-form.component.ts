import { Component, effect } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../Model/Book.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bookform',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookformComponent {
  bookList: Book[] = [];
  submit = false;

  // DI
  constructor(private bs: BookService) { }

  myForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    isbn: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
    year: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]),
    genre: new FormControl<string>('', [Validators.required])
  });

  get title() { return this.myForm.get('title'); }
  get author() { return this.myForm.get('author'); }
  get isbn() { return this.myForm.get('isbn'); }
  get year() { return this.myForm.get('year'); }
  get genre() { return this.myForm.get('genre'); }

  onSubmit() {
    if (this.myForm.valid) {
      const data = this.myForm.value as Book
      this.bs.addBook(data);
      this.submit = true;
      if (this.submit) {
        alert("Book has added to the data base You can go to the BookList page to know about the Book details")
        this.myForm.reset();
      }
    }
  }
}
