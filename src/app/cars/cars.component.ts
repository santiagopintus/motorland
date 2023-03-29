import { Component, Input } from '@angular/core';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  @Input() selectedCar: Car = new Car(0, '', '', 0, '', 0, 0, '');

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.carSelectedEvent.subscribe((car: Car) => {
      this.selectedCar = car;
    });
  }
}
