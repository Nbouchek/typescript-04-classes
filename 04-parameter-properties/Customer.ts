// create a class
// generatte tsconfig using:
//   tsc --build --clean
//   tsc --init
//   tsc
class Customer {
  constructor(private _firstName: string, private _lastName: string) {}

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}

// let's create an instance
let myCustomer = new Customer("Nacer", "Bouchekhima");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer);
