import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop/shop.service';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  types: IType[] = [];
  shopParams = new ShopParams();
  products: IProduct[] = [];
  totalCount: number=0;

  constructor(private router: Router, private shopService: ShopService) { 
    
  }
  btnClick (typeId:number){
    console.log("typeId", typeId);
    this.router.navigate(['/shop'], {queryParams:{filter:typeId}})
  }
  

  ngOnInit(): void {
    this.getTypes();
  }
  getTypes() {
    this.shopService.getTypes().subscribe(response => (this.types = [{ id: 0, name: 'All' }, ...response]), error => {
      console.log(error)
    });
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getTypes();
    this.getProducts();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(response =>
    {
      this.products = response!.data!;
      this.shopParams.pageNumber = response?.pageIndex!;
      this.shopParams.pageSize = response?.pageSize!;
      this.totalCount = response?.count!;

    },
      error => {
      console.log(error);
    });
  }

  
  

}
