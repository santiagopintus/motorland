export class Car {
  constructor(
    public id: number,
    public make: string,
    public model: string,
    public year: number,
    public color: string,
    public mileage: number,
    public price: number,
    public img: string,
    public fuelType?: string,
    public transmission?: string,
    public bodyType?: string,
    public condition?: string
  ) {}
}
