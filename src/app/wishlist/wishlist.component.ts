import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor(private _ProductsService: ProductsService, private _ToastrService:ToastrService ){}
  products: Product[] = [] ;
  wishListRes: any;
  ngOnInit():void{
    this.getWishList();
   
  }
  getWishList(){
    this._ProductsService.getWishList().subscribe({
      next: (res)=>{
        console.log(res)
        this.products=res.data;

      },

    })
  }

  removeItem(id: string){
    this._ProductsService.deletWishList(id).subscribe({
      next: (res)=>{
        console.log(res)
        this.wishListRes=res;

      },error: ()=>{

      },
      complete: () =>{
        this.getWishList();
        this._ToastrService.success(this.wishListRes.messages,'success')
        
      },
    })

  }

}
