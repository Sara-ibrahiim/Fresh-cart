import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../product';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit {

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
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 7
      },
      940: {
        items: 7
      }
    },
    nav: true
  }

  constructor(private _ProductsService: ProductsService){}
categoriesData:Category []=[];
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next: (res)=> {
        console.log(res.data);
        this.categoriesData=res.data;

      }
    })
    
  }

}
