import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { FeaturesComponent } from './features/features.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesRoutingModule } from './features/features-routing.module';
import { FeaturesModule } from './features/features.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewUserComponent,
    FeaturesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,   
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    FeaturesModule,
    MaterialModule,
    NgxUiLoaderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
