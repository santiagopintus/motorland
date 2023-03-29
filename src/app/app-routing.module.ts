import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';

/* CONTACT ROUTES */
const carRoutes: Routes = [
  { path: 'new', component: CarEditComponent },
  { path: ':id', component: CarDetailComponent },
  { path: ':id/edit', component: CarEditComponent },
];
/* APP ROUTES */
const appRoutes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  {
    path: 'cars',
    component: CarsComponent,
    children: carRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
