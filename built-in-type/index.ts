// built-in-type: number, string, boolean,void, undefined, null

// typescript types learn  
let fullName:string;
let firstName:string;
let lastName:string;
let age:number;
let role:string;
let fow:any;

firstName = "Sathi";
lastName = " Sultana";
age= 25;
role = "developer";
fow = "fow"

function vo():void{
    console.log("hi");
}
vo()

fullName = firstName.concat(lastName)

console.log(`the name is ${fullName} , age is ${age} and role ${role}, what the ${fow} kotha`);