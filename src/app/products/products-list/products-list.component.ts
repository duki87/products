import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Product } from '../Product.model';
import { ProductState } from '../store/product.reducer';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private store: Store<ProductState>) { }

  public products$: Observable<Product[]>;
  
  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
