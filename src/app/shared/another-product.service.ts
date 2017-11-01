import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService{
  getDetail(): Product {
    this.loggerService.logOut('message');
    return new Product(2, 'xiaomi', 2999 , 'xiaomi最新款式');
  }
  constructor(private loggerService: LoggerService) { }
}
