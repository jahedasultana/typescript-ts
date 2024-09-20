interface User{
    id: number,
    name: string,
    age: number
}

let users: User[] = [];

let user1: User = {
    id: 1,
    name: "sathi",
    age: 25
}

let user2: User = {
    id: 2,
    name: "sumu",
    age: 25
}

users.push(user1);
users.push(user2);

console.log(users);

const userInfo = (user: User) =>{

console.log(`id ${user.id}, name ${user.name}, age ${user.age}`);
}

users.forEach((user) => userInfo(user))
