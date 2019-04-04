import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FeaturesComponent } from './features.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', component: FeaturesComponent,
    children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products', component: ProductsComponent},
      {path: 'all-products', component: ViewAllProductsComponent},
      {path: 'product-details', component: ViewProductDetailsComponent},
      {path: 'cart', component: ViewCartComponent},
      {path: 'checkout', component: CheckoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
