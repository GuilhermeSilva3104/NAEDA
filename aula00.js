class Product {
  // Em Js, não é necessário declarar o tipo de dado que a variável irá receber
  // O construtor é igual ao Java, porém não é necessário declarar o tipo de dado
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  toString() {
    return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
  }
}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

console.log(p1.toString());
console.log(p2.toString());
