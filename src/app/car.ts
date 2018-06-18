export class CarPage {

  content: Car[];
  totalElements: number;
  totalPages: number;

  constructor(content: Car[], totalElements: number, totalPages: number) {
    this.content = content;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
  }
}

export class Car {
  id: number;
  name: string;
  price: number;
  available: boolean;

  constructor();

  constructor(id: number, name: string, price: number, available: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.available = available;
  }
}
