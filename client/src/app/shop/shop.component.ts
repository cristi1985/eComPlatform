import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { error } from '@angular/compiler/src/util';
import { IBrand } from '../shared/models/brands';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: true }) searchTerm!: ElementRef
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  shopParams = new ShopParams();
  totalCount: number=0;
  sortOptions = [
    { name: 'Alfabetic', value: 'name' },
    { name: 'Pret descrescator', value: 'priceDesc' },
    { name: 'Pret crescator', value: 'priceAsc' },
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
    
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

  getBrands() {
    this.shopService.getBrands().subscribe(response => { this.brands = [{ id: 0, name: 'All' }, ...response] }, error => {
      console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => (this.types = [{ id: 0, name: 'All' }, ...response]), error => {
      console.log(error)
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId= typeId;
    this.getTypes();
  }

  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any) {
    this.shopParams.pageNumber = event;
    this.getProducts();

  }

  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}


