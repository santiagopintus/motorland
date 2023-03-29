import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss'],
})
export class CarEditComponent implements OnInit {
  originalCar: Car = new Car(0, '', '', 0, '', 0, 0, '');
  car: Car = new Car(0, '', '', 0, '', 0, 0, '');
  editMode = false;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }
      const car = this.carService.getCar(id);
      if (car) {
        this.originalCar = car;
      }
      if (!this.originalCar) {
        return;
      }
      this.editMode = true;
      this.car = JSON.parse(JSON.stringify(this.originalCar));
    });
  }

  onSubmit() {
    const newCar = this.car;
    if (this.editMode) {
      this.carService.updateCar(Object.assign(this.originalCar, newCar));
    } else {
      this.carService.addCar(newCar);
    }
    this.router.navigate(['/cars']);
  }

  onCancel() {
    this.router.navigate(['/cars']);
  }

}
