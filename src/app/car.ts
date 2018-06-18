export class Car {
  id: number;
  name: string;
  price: number;
  available: boolean;


  constructor(id: number, name: string, price: number, available: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.available = available;
  }
}
