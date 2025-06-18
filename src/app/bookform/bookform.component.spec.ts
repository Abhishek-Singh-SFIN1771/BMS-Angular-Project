import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookformComponent } from './bookform.component';
import { BookService } from '../book.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BookformComponent', () => {

  let component: BookformComponent;
  let fixture: ComponentFixture<BookformComponent>;
  let bs: BookService;
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookformComponent],
      providers: [BookService, provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bs = TestBed.inject(BookService);
    el = fixture.debugElement;

  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit() Funtion', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should Add book button is disabled while form is invalid', () => 
    {
      const btnElement = el.queryAll(By.css('#test-btn'));
      fixture.detectChanges();
      expect(btnElement[0].nativeElement.disabled).toBeTrue();

    })

    it('should render a button with text ` Add Button `', () => 
    {
      const btnElement = el.queryAll(By.css('#test-btn'));
      fixture.detectChanges();
      expect(btnElement[0].nativeElement.textContent).toBe(' Add Book ');
    })
});