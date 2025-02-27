//тернарен оператор
const isPositiveNum= 5>0? "The number is positive":"The number is negative" //връща стринг
////////////////
const age:number=50;
const myName:string="Ivan";
const personDescription= age<40? `${myName} is younger than 40. He is ${age} years old`:
`${myName} is older than 40. He is ${age} years old`

const personName=`His name is "${myName}".` // може да се ползват кавички 
// If else
if(age<40){
    console.log("Ages are lower than 40")
}else if(age>80){
    console.log("Ages are greater than 40")
}else{
    console.log("Ages are greater than 40")
}

///TypeAllias??