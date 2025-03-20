//1.Create an array of strings and add a new element at the end of the array. Log the result.

let stringArray:string[]=["apple", "car", "boy", "dog", "blue"];
let pushedElement =stringArray.push("peach");
console.log("The new array contains:", stringArray);

//2.Create an array of numbers and remove the first element from the array. Log the result.

let numArray: number[]=[10,20,30,40,50];
let removedElement =numArray.shift();
console.log("The new array contains", numArray);

//3.Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
let newNumArray:number[]=numArray.map((num:number)=>num/2);
console.log("The new Map array contains:",newNumArray);

//4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let numberArray:number[]=[3, 7, 1, 9, 12, 4];
let greaterNums=numberArray.filter((num:number)=>num>5);
console.log("Numbers greater than 5 are:" ,greaterNums);

//5.Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let array:number[]=[9, 3, 7, 2, 8, 5, 22];
let sortedArray=array.sort(((a, b) => a - b));
console.log("Sorted numbers are:", sortedArray);

//6.Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let fruitArray:string[]=['apple', 'banana', 'cherry', 'date', 'elderberry'];
let slicedArray=fruitArray.slice(0,3);
console.log("The first three elements are:",  slicedArray);

//7.Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let vehicleArray:string[]=['car', 'bike', 'bus', 'train', 'boat'];
let splicedArray=vehicleArray.splice(1,2);
console.log("The remaining vehicles are:", vehicleArray);

//8.Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(firstNum:number, secondNum:number, thirdNum:number){
    if(firstNum>secondNum && firstNum>thirdNum){
        return firstNum}
    if(secondNum>firstNum && secondNum>thirdNum){
        return secondNum
    }else{
        return thirdNum
    }
}
let largestNumber:number=findLargest(1,10,111);
console.log(`The largest number is: ${largestNumber}.`);

//9.Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters (inches:number=10){
return inches*2.54
}
let cantimetersDefault=convertToCentimeters();
let cantimetars=convertToCentimeters(20);
console.log ("10 inches are:",cantimetersDefault ,"cm. and 20 inches are",cantimetars,"cm." );
//10.Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width:number, height?:number){
 return height ? `The shape is a rectangle with area ${width * height}.` : `The shape is a square with area ${width * width}.`
}
let squire=calculateArea(5);
let rectangle=calculateArea (5,6);
console.log(squire);
console.log(rectangle)