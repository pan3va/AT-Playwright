//Aliases
type Role = { role: "manager" | "founder" };
type userPermissions = { permissions: "admin" | "user" };

type User = Role & userPermissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};

// Object types with Interfaces
interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "dog",
  breed: "dakel",
  age: 15,
  weight: 6,
  name: "Sharo",
};

interface Cars {
  color: string;
  wheels: number;
  transmission: "manual" | "automatic";
  fuelType: "diesel" | "gasoline";
  startEngine: () => string;
}

const car: Cars = {
  color: "white",
  wheels: 4,
  transmission: "manual",
  fuelType: "diesel",
  startEngine: function () {
    return "Start the engine.";
  },
};
// get object keys= keys: [ 'color', 'wheels', 'transmission', 'fuelType', 'startEngine' ]
const keys = Object.keys(car);

// get object values:= values: [ 'white', 4, 'manual', 'diesel', [Function: startEngine] ]
const values = Object.values(car);

//object assign two objects in one

const colorObj = {
  color: "black",
};

const backgroundObj = {
  background: "white",
};

const assignedObject = Object.assign({}, colorObj, backgroundObj);
console.log(assignedObject);
