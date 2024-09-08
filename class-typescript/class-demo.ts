
class UserData{
    // properties ,method, constructor

    userName: string;
    age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    showUserName(){
        console.log(`userName ${this.userName} age ${this.age}`);


    }
}

let user2 = new UserData('sathi', 25)
user2.showUserName()

let sathi = new UserData('Zahid', 24)
sathi.showUserName()
