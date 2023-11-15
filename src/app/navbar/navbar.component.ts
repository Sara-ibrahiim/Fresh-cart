import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin: boolean = false
  numCart:number = 0;
constructor(private _AuthService: AuthService,private _CartService:CartService){
  _CartService.numOfCartItems.subscribe({
    next:(val)=> {
      
      this.numCart = val;
     
      
    },
  })
  _AuthService.userProfile.subscribe({
    next: () => {
      if (_AuthService.userProfile.getValue() !== null) {

        this.isLogin = true;
     }
     else{
       this.isLogin = false;
     }

    }
  })

}
logout(){
  this._AuthService.logout()
}

}
