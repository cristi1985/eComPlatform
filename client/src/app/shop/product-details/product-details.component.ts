import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService:BreadcrumbService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe(prod => {
      //console.log('Product is', product);
      this.product = prod;
      console.log('Product is', this.product)
      this.bcService.set('@productDetails', this.product.productName!)
    }, error => {
        console.log(error);
    })
  }
}
