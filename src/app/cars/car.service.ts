import { Injectable, EventEmitter } from '@angular/core';
import { Car } from './car.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars: Car[] = [];
  carsUrl: string = 'http://localhost:3000/cars';
  carSelectedEvent = new EventEmitter<Car>();
  carListChangedEvent = new Subject<Car[]>();

  constructor(private http: HttpClient) {
    this.getCarsFromServer().subscribe(
      (cars: Car[]) => {
        this.cars = cars;
        this.cars.sort((a, b) => a.make.localeCompare(b.make));
        this.carListChangedEvent.next(this.cars.slice());
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /* FUNCTIONS */
  getCarsFromServer() {
    return this.http.get<Car[]>(this.carsUrl);
  }

  //Getting all cars
  getCars(): Car[] {
    return this.cars.slice();
  }

  //Getting one car
  getCar(id: number): Car | null {
    let car = this.cars.find((c) => c.id == id);
    console.log("FOUND", car);
    return car || null;
  }
  getIndex(car: Car): number {
    /* Looks the index of the car to update */
    const i = this.cars.findIndex((c) => c.id === car.id);
    /* Checks if it exists */
    if (i < 0) {
      throw Error(`Car ${car.make} not found`);
    }
    return i;
  }

  /* ADD A CONTACT */
  addCar(newCar: Car): void {
    if (!newCar) {
      return;
    }
    newCar.id = 0;
    console.log(newCar);
    this.http.post(this.carsUrl, newCar).subscribe((data: any) => {
      let car = data.car;
      if (car) {
        this.cars.push(car);
        this.carListChangedEvent.next([...this.cars]);
      }
    });
  }

  /* UPDATE A CONTACT */
  updateCar(car: Car) {
    /* Checks if cars is defined */
    if (!car) {
      return;
    }
    /* Looks the index of the car to update */
    const i = this.getIndex(car);
    if (i < 0) return;
    /* Sends the updated car to the server */
    /* Update the car in the array and in the DB */
    this.http.put(`${this.carsUrl}/${car.id}`, car).subscribe(() => {
      this.cars[i] = { ...car };
      this.carListChangedEvent.next([...this.cars]);
    });
  }

  /* DELETE A CONTACT */
  deleteCar(car: Car | null) {
    if (!car) {
      return;
    }
    const i = this.getIndex(car);
    if (i < 0) return;
    /* Remove car and update DB */
    /* Sends a delete request for the car to the server */
    console.log(car.id);
    this.http.delete(`${this.carsUrl}/${car.id}`).subscribe(() => {
      /* Remove car and emit event */
      this.cars.splice(i, 1);
      this.carListChangedEvent.next([...this.cars]);
    });
  }
}
