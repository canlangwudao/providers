import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {

  constructor() { }

  getDetail(){
    return new Product(1, 'apple', 3999 , 'apple最新款式');
  }

}

export class Product {

  constructor(
   public id: number,
   public name: string,
   public price: number,   
   public desc: string,
  ) { }
}