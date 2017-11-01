import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-pruduct1',
  templateUrl: './pruduct1.component.html',
  styleUrls: ['./pruduct1.component.css']
})
export class Pruduct1Component implements OnInit {

  private product: Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product = this.productService.getDetail();
  }

}
