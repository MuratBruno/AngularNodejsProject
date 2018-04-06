import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { ResearchComponentComponent } from './research-component/research-component.component';
import { ProductSelectionbykeywordsComponentComponent } from './product-selectionbykeywords-component/product-selectionbykeywords-component.component';
import { ProductSelectionbycriteriaComponentComponent } from './product-selectionbycriteria-component/product-selectionbycriteria-component.component';
import { ProductDisplayComponentComponent } from './product-display-component/product-display-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartManagementComponentComponent } from './cart-management-component/cart-management-component.component';
import { CartValidationComponentComponent } from './cart-validation-component/cart-validation-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    ResearchComponentComponent,
    ProductSelectionbykeywordsComponentComponent,
    ProductSelectionbycriteriaComponentComponent,
    ProductDisplayComponentComponent,
    CartComponentComponent,
    CartManagementComponentComponent,
    CartValidationComponentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
