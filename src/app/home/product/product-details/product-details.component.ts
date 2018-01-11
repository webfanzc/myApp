import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../../../shared/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, DoCheck {
  imgUrl = 'http://placehold.it/820x320';
  product: Product;
  comments: Comment[];
  productTitle: string;
  productId: number;
  newRating: number = 5;
  newComments: string;
  commentRating: number;
  averageRating: number;
  ratingTotal: number;
  isCommentHidden: boolean = true;
  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService) {

  }

  ngOnInit() {
    const productId: number = Number(this.routerInfo.snapshot.params['id']);
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getComments(productId);
    this.calcAverage();

  }

  ngDoCheck() {
    this.calcAverage();
  }

  calcAverage() {
    let ratingTotal = this.comments.reduce((sum, item) => sum + item.rating, 0);
    this.product.rating = ratingTotal / this.comments.length;
  }

  addComment() {
    if (!this.newComments || this.newComments.trim() === '') {
      return;
    }
    let comment = new Comment(this.comments.length + 1, this.productId, new Date(), '张三', this.newRating, this.newComments);
    this.comments.unshift(comment);
    this.isCommentHidden = !this.isCommentHidden;
    this.newComments = '';
  }
}
