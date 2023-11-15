import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})


export class ProductDetailesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1500,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService){}
  productId: string = '';
  produectData:any;
  ngOnInit(): void {
    this.productId= (this._ActivatedRoute.snapshot.params['id']);
    this._ProductsService.getProductsById(this.productId).subscribe({
      next: (res)=> {
        this.produectData=res.data;

      }

    })
    
  //  this._ActivatedRoute.snapshot.paramMap.subscribe({
  //   next: (res) => {
  //     console.log(res.get('id'));
  //   }
  //  })
  }

}
