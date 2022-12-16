import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor (private _http: HttpClient) {}

  getAll() {
    return this._http.get('https://dummyjson.com/products');
  }

  getByCategory(category: string) {
    return this._http.get(`https://dummyjson.com/products/category/${category}`);
  }

  getById(id: number) {
    return this._http.get(`https://dummyjson.com/products/${id}`);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error("ERROR"));
  }
}