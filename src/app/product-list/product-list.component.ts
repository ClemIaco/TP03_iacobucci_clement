import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {ApiService} from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.products = this.apiService.getProducts();
  }
}
