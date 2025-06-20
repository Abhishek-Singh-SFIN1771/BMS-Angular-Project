import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';
import { BookService } from '../book.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;
  let bs: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooklistComponent],
      providers: [BookService, provideHttpClient() , provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bs = TestBed.inject(BookService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call bookList Funtion' , () => 
    {
      spyOn(component, 'bookList');
      component.bookList();
      expect(component.bookList).toHaveBeenCalled();
    });

     it('should call showDetails Funtion' , () => 
    {
      spyOn(component, 'showDetails');
      component.showDetails(1);
      expect(component.showDetails).toHaveBeenCalled();
    });


});
