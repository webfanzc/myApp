import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private imgUrl = 'http://placehold.it/320x150';

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子产品', '奢侈品']),
      new Product(2, '第二个商品', 1.99, 4.5, '这是第二个商品', ['家具', '奢侈品']),
      new Product(3, '第三个商品', 1.99, 1.5, '这是第三个商品', ['电子产品', '家具']),
      new Product(4, '第四个商品', 1.99, 2.5, '这是第四个商品', ['电子产品', '奢侈品']),
      new Product(5, '第五个商品', 1.99, 0.5, '这是第五个商品', ['电子产品', '奢侈品', '家具']),
      new Product(6, '第六个商品', 1.99, 4.5, '这是第六个商品', ['电子产品', '奢侈品'])
    ];
    this.products.push(new Product(7, '第七个商品', 1.99, 4.5, '这是第七个商品', ['电子产品', '奢侈品'])
    );
  }
}


export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: string[]) {

  }
}
