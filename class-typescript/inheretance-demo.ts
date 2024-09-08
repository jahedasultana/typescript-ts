class Person{
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

class Teacher extends Person {
    subject: string;

    constructor(userName: string, age: number,subjectPPPP:string){
        super(userName,age)
        this.subject = subjectPPPP;
    }

    teacherName(){
        console.log(`userName ${this.userName} age ${this.age} and teacher ${this.subject}`);
    }
}

let teacherData1 = new Teacher("ss",12,"bangla");
teacherData1.showUserName()
teacherData1.teacherName()