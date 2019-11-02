// crate a class
class Customer {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// let's create an instance
let myCustomer = new Customer("Nacer", "Bouchekhima");

console.log(myCustomer.firstName)
console.log(myCustomer.lastName)
console.log(myCustomer)
