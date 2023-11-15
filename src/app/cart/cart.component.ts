import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}

ngOnInit(): void {
  this.getUserCart();
  
}

cartDetiales: any;
getUserCart(){
  this._CartService.getUserCart().subscribe({
    next: (res)=> {
      console.log(res);
      this.cartDetiales=res.data
    }
  })
}
removeCartItem(id: any){
  
  this._CartService.removeCartItem(id).subscribe({
    next: (res)=> {
      console.log(res);
      this.cartDetiales = res.data;
      this._CartService.numOfCartItems.next(res.numOfCartItems)

      
      
    },error:() =>{
      
    },complete:()=> {
      //this.getUserCart()
      
    },
  })

}
updateCartItem(id: string, count:number){
  if (count == 0) {
    this.removeCartItem(id);
  }
  
  this._CartService.updateCartItem(id,count).subscribe({
    next: (res)=> {
      console.log(res);
      this.cartDetiales = res.data;

      
    },error:() =>{
      
    },complete:()=> {
      //this.getUserCart()
      
    },
  })

}

}
