import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductsComponent } from './products/products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    ProductsComponent, 
    ViewAllProductsComponent, 
    ViewProductDetailsComponent, 
    ViewCartComponent, 
    CheckoutComponent, 
    BillingComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports : [
    ProductsComponent, 
    ViewAllProductsComponent, 
    ViewProductDetailsComponent, 
    ViewCartComponent, 
    CheckoutComponent, 
    BillingComponent
  ]
})
export class FeaturesModule { }
