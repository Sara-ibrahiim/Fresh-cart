import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private _ProductsService: ProductsService,private toastr: ToastrService,private _CartService:CartService){}

 isInWishList:boolean=false;

 x: string=''
 cartData:any;
products: Product[] = [] ;
wishList:any[]=[];
selectedId:any;
wishData: any[] = []
resWishList: any;

ngOnInit(): void {


  this._ProductsService.getProducts().subscribe({
    next:(res) => {
      console.log(res)
      this.products=res.data;
  
     
  }
    
  });

  this._ProductsService.getWishList().subscribe({
    next:(res)=> {
      console.log(res);
      this.wishData = res.data
      for (const item of res.data) {
  
      }
      
    },error:()=> {},
    complete:()=>{
    
    },
    
  });

  

  

}





addToWishList(id: string){
 
   this._ProductsService.addWishList(id).subscribe({
     next:(res) =>{
       console.log(res)
     },error:()=> {},
     complete:()=>{
      //  this.toastr.success(this.resWishList.status, this.resWishList.message);
     },

   })

}

toggle(icon :MouseEvent){
  (<HTMLElement>icon.target).classList.toggle('fa-solid');
  (<HTMLElement>icon.target).classList.toggle('fa-regular')
 
}

addToCart(id:string){

   this._CartService.addToCart(id).subscribe({
    next:(res) =>{
      this._CartService.numOfCartItems.next(res.numOfCartItems)
     console.log(res)
      this.cartData= res;


   },error:()=> {},
   complete:()=>{
      this.toastr.success(this.cartData.message);
    },

  })
}
}

