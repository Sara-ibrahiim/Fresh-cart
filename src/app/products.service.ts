import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient ) { }

  getProducts(): Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getCategories(): Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  getProductsById(id : string): Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  addWishList(id : string): Observable<any>{
    let myHeaders = new HttpHeaders().set('token',''+localStorage.getItem('userToken'))
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist', {productId: id},{headers: myHeaders})
  }
  deletWishList(id : string): Observable<any>{
    let myHeaders = new HttpHeaders().set('token',''+localStorage.getItem('userToken'))
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers: myHeaders})
  }
  getWishList(): Observable<any>{
    let myHeaders = new HttpHeaders().set('token',''+localStorage.getItem('userToken'))
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers: myHeaders})
  }

  getBrands(): Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
/*
  headers_object = new HttpHeaders().set("token", ' ' + localStorage.getItem('userToken'));
  baseUrl: string = 'https://route-ecommerce-app.vercel.app/api/v1/';
  numOfCartItems = new BehaviorSubject(0);

  constructor(private _HttpClient: HttpClient) {
    this.getUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }

  getProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products')
  }
  getProductsById(id: any): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}products/${id}`)
  }
  getCategories(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}categories`)
  }

  addWishList(id: any): Observable<any> {


    return this._HttpClient.post(`${this.baseUrl}wishlist`, { productId: id })
  }
  deletWishList(id : string): Observable<any>{
    let myHeaders = new HttpHeaders().set('token',''+localStorage.getItem('userToken'))
    return this._HttpClient.delete(`https://route-ecommerce-app.vercel.app/api/v1/wishlist/${id}`,{headers: myHeaders})
  }

  getWishList(): Observable<any> {


    return this._HttpClient.get(`${this.baseUrl}wishlist`)
  }

  addToCart(id: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}cart`, { productId: id })
  }

  getUserCart(): Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}cart`)
  }

  removeCartItem(id: any): Observable<any> {

    return this._HttpClient.delete(`${this.baseUrl}cart/${id}`)
  }
  updateCartItem(id: any, count: any): Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}cart/${id}`, { count: count })
  }

  onlinePayment(data: FormGroup, cartId: string): Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`, { shippingAdress: data })
  }*/
}
