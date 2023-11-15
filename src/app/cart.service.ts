import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class CartService {

  numOfCartItems = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) { 
    this.getUserCart().subscribe({
      next: (res)=> {
        
        this.numOfCartItems.next(res.numOfCartItems);
        console.log(res);
     
       
      }
    })
  }
  myHeaders= new HttpHeaders ().set('token',' '+ localStorage.getItem('userToken'));
 
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1';



addToCart(id: string): Observable<any> {
  return this._HttpClient.post(`${this.baseUrl}/cart`, {productId: id},{headers :this.myHeaders})
}
getUserCart(): Observable<any> {
  return this._HttpClient.get(`${this.baseUrl}/cart`,{headers :this.myHeaders})
}
updateCartItem(id: string, count: number): Observable<any> {
  return this._HttpClient.put(`${this.baseUrl}/cart/${id}`,{count: count},{headers :this.myHeaders})
}
removeCartItem(id: string): Observable<any> {
  return this._HttpClient.delete(`${this.baseUrl}/cart/${id}`,{headers :this.myHeaders})
}
onlinePayment(cartId: string, data: FormGroup): Observable<any>{
  return this._HttpClient.post(`${this.baseUrl}/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAdress: data},{headers :this.myHeaders})
 
}

getUserOrders(cartId: string): Observable<any>{

  return this._HttpClient.get(`${this.baseUrl}/orders/user/${cartId}`)
   
}
}
