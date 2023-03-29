import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsFilterPipe } from './cars/cars-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CarListComponent,
    CarDetailComponent,
    CarItemComponent,
    CarEditComponent,
    CarsFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
