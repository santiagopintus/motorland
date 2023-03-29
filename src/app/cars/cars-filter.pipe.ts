import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './car.model';

@Pipe({
  name: 'carsFilter',
})
export class CarsFilterPipe implements PipeTransform {
  transform(cars: Car[], term: string): any {
    if (!term) {
      return cars;
    }

    term = term.toLowerCase();

    return cars.filter(
      (car) =>
        car.make.toLowerCase().includes(term) ||
        car.model.toLowerCase().includes(term)
    );
  }
}
