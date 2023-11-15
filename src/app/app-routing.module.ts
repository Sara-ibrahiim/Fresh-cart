import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
   {path: '',redirectTo: 'login',pathMatch:"full"},
   {path: 'home', canActivate: [AuthGuard], component: HomeComponent, title: 'home'},
   {path: 'cart', canActivate: [AuthGuard],component: CartComponent, title: 'cart'},
   {path: 'products', canActivate: [AuthGuard], component: ProductsComponent, title: 'products'},
   {path: 'product-detailes/:id', canActivate: [AuthGuard], component:ProductDetailesComponent},
   {path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent, title: 'categories'},
   {path: 'brands', canActivate: [AuthGuard], component: BrandsComponent, title: 'brands'},
   {path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent},
   {path: 'checkout/:id', canActivate: [AuthGuard], component: CheckoutComponent},
   {path: 'allorders', canActivate: [AuthGuard], component: AllordersComponent},
   {path: 'login', component: LoginComponent, title: 'login'},
   {path: 'register', component: RegisterComponent, title: 'register'},
   {path: '**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
