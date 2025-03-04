interface Animal{
    species:string;
    breed?:string;
    age:number;
    weight?:number;
    name:number 
}

interface Car{
make:"string";
model:"string";
year:number
}

interface EngineeSpecifications extends Car{
    engineType:string;
    horsePower:number;
}