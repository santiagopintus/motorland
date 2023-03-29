import { Component, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent {
  @Input() car: Car = new Car(0, '', '', 0, '', 0, 0, '');
}
