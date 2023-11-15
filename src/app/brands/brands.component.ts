import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  barnds : any []=[]
  constructor(private _ProductsService:ProductsService){}

  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next: (res: any)=> {
        this.barnds=res.data;



      }
    })
  }

}
