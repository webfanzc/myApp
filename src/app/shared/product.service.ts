import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {
  private date: Date = new Date();
  private price:number = 3.1415926;
  private products: Product[] = [
    new Product(1, '第一个商品', this.price, 3.5, '这是第一个商品', ['电子产品', '奢侈品']),
    new Product(2, '第二个商品', this.price, 4.5, '这是第二个商品', ['家具', '奢侈品']),
    new Product(3, '第三个商品', this.price, 1.5, '这是第三个商品', ['电子产品', '家具']),
    new Product(4, '第四个商品', this.price, 2.5, '这是第四个商品', ['电子产品', '奢侈品']),
    new Product(5, '第五个商品', this.price, 0.5, '这是第五个商品', ['电子产品', '奢侈品', '家具']),
    new Product(6, '第六个商品', this.price, 4.5, '这是第六个商品', ['电子产品', '奢侈品'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, this.date, 'zc', 1.5, '这个东西非常不错'),
    new Comment(1, 1, this.date, 'zc', 2.5, '这个东西非常不错'),
    new Comment(1, 1, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(2, 2, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(2, 2, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(3, 3, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(3, 3, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(4, 4, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(4, 4, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(4, 4, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(5, 5, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(6, 6, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(6, 6, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(6, 6, this.date, 'zc', 3.5, '这个东西非常不错'),
    new Comment(6, 6, this.date, 'zc', 3.5, '这个东西非常不错')
  ];

  constructor(private logger: LoggerService) {

  }

  getProduct(): Product[] {
    this.logger.log('getProduct 被调用');
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  getComments(productId: number): Comment[] {
    return this.comments.filter(comment => comment.productId === productId);
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

export class Comment {

  constructor(public id: number,
              public productId: number,
              public time: Date,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
