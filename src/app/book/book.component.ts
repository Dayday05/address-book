import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Address } from './Address';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  addresses: Address[];

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
