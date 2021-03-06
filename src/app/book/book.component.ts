import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Address } from './address';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public addresses: Address[];

  constructor(private service: BookService) { }

  getAll() {
    this.service.findAll().subscribe(
      data => {
        this.addresses = data;
      }
    )

  }

  ngOnInit() {
  }

}
