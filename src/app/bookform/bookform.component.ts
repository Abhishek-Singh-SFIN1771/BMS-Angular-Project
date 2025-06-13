import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../Model/Book.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bookform',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './bookform.component.html',
  styleUrl: './bookform.component.css'
})
export class BookformComponent {
  bookList: Book[] = [];

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
      this.myForm.reset();
    }
  }
}
