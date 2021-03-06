import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
