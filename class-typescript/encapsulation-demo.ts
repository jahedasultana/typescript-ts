//  public, private, protected, readonly
// private: we can't access anywhere , use only own scope
// protected: modified only subClass

class User {
    // properties ,method, constructor
  
  //   public userName: string;
  //   public age: number;
  
    public userName: string;
    public age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age} `);
    }
  }
  
  class Student extends User {
    private subjectId: number;
  
    constructor(userName: string, age: number, studentID: number) {
      super(userName, age);
      this.subjectId = studentID
    }
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.subjectId}`);
    }
  
  // private data access use public function
    setStudent(studentId:number): void{
      this.subjectId = studentId
    }
  
    getStudentId():number{
      return this.subjectId
    }
  
  }
  
  let student1 = new Student("sathi", 31, 121)
  student1.display()
  student1.setStudent(101010)
  console.log(student1.getStudentId());
  
  
  let user1 = new User("robi", 23)
  user1.userName = "JavaScript";
  // console.log(user1);
  user1.display()