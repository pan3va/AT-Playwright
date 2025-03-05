interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

const person1: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  age: 33,
  email: "ivanov@gmail.com",
  phoneNumber: 888333333,
};

const person2: PersonInfo = {
  name: "Ivan",
  lastName: "Ivanov",
  age: 33,
  email: "ivanov@gmail.com",
  phoneNumber: 888333333,
  country: "Bulgaria",
  greeting: function () {
    return `Hello, I am mr. ${person2.lastName}`;
  },
};
