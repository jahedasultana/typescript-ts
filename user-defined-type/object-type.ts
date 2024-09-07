let users : object[];

users = []
let user1: { userName: string, userId: number };
user1 = {userName: 'sathi', userId: 12};
// console.log(user1);
users.push(user1);



let user2: { userName: string, userId: number };
user2 = {userName: 'sumu', userId: 15};
// console.log(user2);
users.push(user2);
console.log(users);

for (const key in users) {
    console.log(users[key]['userName']);
}