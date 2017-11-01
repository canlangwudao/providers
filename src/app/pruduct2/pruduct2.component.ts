import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-pruduct2',
  templateUrl: './pruduct2.component.html',
  styleUrls: ['./pruduct2.component.css'],
  providers: [
    { provide: ProductService, useClass: AnotherProductService}
    ,LoggerService
  ],
})
export class Pruduct2Component implements OnInit {

  private product: Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product = this.productService.getDetail();
  }

}
