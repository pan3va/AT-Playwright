// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
// Step Two: Declare an object "country" with properties following "Country" interface
// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}
const country: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 6000000,
  language: "BGN",
};

function displayCtountryDetails(parameter1: Country) {
  // само казваме колко и какъв тип параметър да очаква функцията
  return `The capital of ${parameter1.name} is ${parameter1.capital}. 
    The offical language is ${parameter1.language} and population of ${parameter1.population} people.`;
}
const countryDetails = displayCtountryDetails(country);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentObj: Student = {
  id: 1000,
  name: "Ivan ivanov",
  age: 21,
  grade: 2,
};
const studentObj2: Student = {
  id: 2000,
  name: "Petar Petrov",
  age: 24,
  grade: 3,
};
const studentObj3: Student = {
  id: 3000,
  name: "Georgi  Petrov",
  age: 22,
  grade: 4,
};

// Step Three: Declare array "students" with objects of type "Student"
const studentsArray: Student[] = [studentObj, studentObj2, studentObj3];

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudents(parameter1: Student[]) {
  return parameter1.map((student) => student.name);
}

const studentsName = getStudents(studentsArray);
console.log(studentsName);

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

function sortStudents(student: string[]) {
  return student.sort();
}
const sortedNames = sortStudents(studentsName);
console.log(sortedNames);
