import {Component, OnInit} from '@angular/core';
import {Product, ProductService, Comment} from '../../shared/product.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  filterProduct: FormControl = new FormControl();
  imgUrl = 'http://placehold.it/320x150';
  private keyword: string;

  constructor(private productService: ProductService,
              private router: Router) {
    this.products = this.productService.getProduct();
    this.filterProduct.valueChanges
      .debounceTime(300)
      .subscribe(
        e => this.keyword = e
      );
  }

  toProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  ngOnInit() {
  }
}

