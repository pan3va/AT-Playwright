let numberArray: number[]=[1,2,3,4];
let stringArray:string []=["Apple", "Bannana", "Pear", "Peach", "Grape"];
let stringAndNumArray: (string|Number)[]=["Pesho",1,"Gosho"] // или стринг или число    

stringArray.push("Mango");// добавя елемент в края на масива
numberArray.pop();//маха последния елемент на масива
numberArray.shift();//маха първия елемент на масива
numberArray.unshift(5)// добавя елемент на първа позиция в масива


let multiplyNumbers=numberArray.map((element:number)=>element*2);


let multiplySpecialNumbers=numberArray.map((element:number)=>{// прилага едно и също условие в/у всеки елемент
    if(element>4){
        return element*2
    }else{
        return element
    }
})
console.log(multiplySpecialNumbers)

let filterArrayNum=numberArray.filter((element:number)=>element>2);