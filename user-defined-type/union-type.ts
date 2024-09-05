// user defined data type - 
// union data type: when user have specific data they can use it
let userId:(number | string | boolean);

userId = "12";
userId= true
userId = 12;

function user(id: number | string): void{
    console.log(id);
}
user("12")
user(12)