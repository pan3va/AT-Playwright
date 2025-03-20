//for of  over string

let msg: string = "Hello World";

for (let letter of msg) {
  if (letter === "o") {
    console.log(letter.replace("o", "@"));
  } else {
    console.log(letter);
  }
}

//for in- oбхождане на обект, връща само ключовете,

const person = { name: "Allice", age: 25, city: "Sofia" };
for (let key in person) {
  console.log(key); // name, age, city
}
interface Student {
  name: string;
  lastname: string;
  age: number;
}
const student: Student = { name: "Pesho", lastname: "Petrov", age: 19 };

for (let info in student) {
  console.log(`${info} = ${student[info as keyof Student]}`);
}

//for in over array

let numsArr: number[] = [35, 25, 45, 50];

for (let index in numsArr) {
  //accessing array value by passing array index
  console.log(`${index}=${numsArr[index]}`);
}

for (let i = 0; i <= 5; i++) {
  console.log(`Index is ${i}`);
}

//for loop over array
let numbersArr: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];
{
  for (let i = 0; i <= 9; i++) {
    console.log(numbersArr[i]);
  }
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i < numbersArr.length ; i++) {
  console.log(numbersArr[i]/2);
}
