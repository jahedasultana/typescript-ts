type User = { userName: string, userId: number };
let users : User[];

users = []
let user1: User;
user1 = {userName: 'sathi', userId: 12};
// console.log(user1);
users.push(user1);


let user2: User;
user2 = {userName: 'sumu', userId: 15};
// console.log(user2);
users.push(user2);
console.log(users);

type RequestType = "GET" | "POST" | "PUT" | "DELETE"
let getRequest:RequestType;
let postRequest:RequestType;
getRequest = "POST"

function handlePost(requestPost:RequestType){
    console.log(requestPost);
}
handlePost("POST")