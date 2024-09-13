//  public, private, protected, readonly
 
 class User{
    // properties ,method, constructor
    public userName: string;
    public age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;
    }

    display():void{
        console.log(`userName ${this.userName} age ${this.age}`);
     };

     
}

class Teacher extends User {
    subject: string;
    constructor(userName: string, age: number,subjectPPPP:string){
        super(userName,age)
        this.subject = subjectPPPP;
    }
   display(): void {
        console.log(`userName ${this.userName} age ${this.age} and teacher ${this.subject}`);
    }
   
}

let teacherData1 = new Teacher("ss",12,"bangla");
// teacherData1.display();

let user1 = new User('sathi', 25);
user1.userName = 'pinky';
user1.display();