import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  @Output() selectedCarEvent: EventEmitter<Car> =
    new EventEmitter<Car>();
  term: string = '';

  search(value: string) {
    this.term = value;
  }
  onSelected(car: Car): void {
    this.carService.carSelectedEvent.emit(car);
  }

  cars: Car[] = [];
  subscription: Subscription;

  constructor(private carService: CarService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.cars = this.carService.getCars();
    this.subscription = this.carService.carListChangedEvent.subscribe(
      (cars: Car[]) => {
        this.cars = cars;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
