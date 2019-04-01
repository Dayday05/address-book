import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './book/Address';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:8080/api/address/all";

  findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl);
  }


}
