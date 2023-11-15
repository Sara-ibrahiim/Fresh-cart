import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{
user:any;
cartData:any;
constructor(private _CartService:CartService,private _AuthService:AuthService){ }
ngOnInit(): void {
  this.user = this._AuthService.userProfile.getValue()
  this._CartService.getUserOrders(this.user.id).subscribe({
    next:(res)=> {
      console.log(res);
      this.cartData= res

      
    },
  })
}
}
