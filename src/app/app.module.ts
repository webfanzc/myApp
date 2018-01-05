import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {ProductComponent} from './home/product/product.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailsComponent} from './home/product/product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {Routes, Router, RouterModule} from '@angular/router';
import {ProductService} from './shared/product.service';
import {LoggerService} from './shared/logger.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MutiplePipe } from './pipe/mutiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';

const routerConfig: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailsComponent,
    HomeComponent,
    MutiplePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService,
    LoggerService],
  bootstrap:
    [AppComponent],

})

export class AppModule {
}
