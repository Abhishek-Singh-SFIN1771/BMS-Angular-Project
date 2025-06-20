import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting,  HttpTestingController} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { provideHttpClient } from '@angular/common/http';
import { Book } from './Model/Book.component';

describe('BookService', () => {
  let service: BookService;
  let testingController: HttpTestingController; 
  let book: Book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: 12345,
    year: 1993,
    genre: "Fiction"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService ,provideHttpClient() , provideHttpClientTesting()]
    });
    service = TestBed.inject(BookService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addBook Funtion' , () => 
    {
      spyOn(service, 'addBook');
      service.addBook(book);
      expect(service.addBook).toHaveBeenCalled();
    });

     it('should call getBook Funtion' , () => 
    {
      spyOn(service, 'getBook');
      service.getBook();
      expect(service.getBook).toHaveBeenCalled();
    });
});
