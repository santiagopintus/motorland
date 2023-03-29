import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent {
  // Inject the CarService, Router, and ActivatedRoute services
  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  car: Car | null = new Car(0, '', '', 0, '', 0, 0, '');

  ngOnInit() {
    // Subscribe to the active route and get the id of the selected car
    this.route.params.subscribe((params) => {
      this.car = this.carService.getCar(params['id']);
    });
  }

  onDelete() {
    this.carService.deleteCar(this.car);
    this.router.navigateByUrl('/cars');
  }
}
