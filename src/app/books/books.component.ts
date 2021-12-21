import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from './book.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newbook: any = {
    title: '',
    subtitle: '',
    author: '',
    published: '',
    publisher: '',
    pages: '',
    description: '',
    website: '',
    inCart: false
  };

  upbook: any = {
    title: '',
    subtitle: '',
    author: '',
    published: '',
    publisher: '',
    pages: '',
    description: '',
    website: '',
    inCart: false,
  };

  showV = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.refreshBooks();

  }
    
  refreshBooks(): void {
    this.booksService.getBooks().subscribe(payload => {
      this.books = payload;
    })
  }
  
  deleteBooks(id: number): void {
    this.booksService.delBooks(id).subscribe(() => {
        this.refreshBooks();
    })
  }

  postBook(newbook: any): void {
    this.booksService.postBooks(newbook).subscribe(() => {
      this.refreshBooks();
      this.clearFields();
    })
  }

  putBooks(newbook: any): void {
    this.newbook.id = newbook.id;
    this.booksService.putBooks(newbook).subscribe(() => {
      this.refreshBooks();
      this.clearFields();
    })
  } 

  clearFields(): void {
    this.upbook = ' ';
    this.newbook = ' ';
    this.newbook.inCart = false;
    this.upbook.inCart = false;
  }

  showPut(show: boolean): void {
    this.showV = show;
  }

}
