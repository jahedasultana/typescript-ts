// //  public, private, protected, readonly
// // private: we can't access anywhere , use only own scope
// // protected: modified only subClass
// class User {
//     // properties ,method, constructor
//   //   public userName: string;
//   //   public age: number;
//     protected userName: string;
//     public age: number;
//     constructor(userName: string, age: number) {
//       this.userName = userName;
//       this.age = age;
//     }
//     display(): void {
//       console.log(`username: ${this.userName}, age: ${this.age} `);
//     }
//   }
//   class Student extends User {
//     subjectId: number;
//     constructor(userName: string, age: number, studentID: number) {
//       super(userName, age);
//       this.subjectId = studentID
//     }
//     display(): void {
//       console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.subjectId}`);
//     }
//   }
//   let student1 = new Student("zahid", 31, 121)
//   student1.display()
//   let user1 = new User("robi", 23)
//   user1.userName = "JavaScript";
//   console.log(user1);
//   user1.display()
