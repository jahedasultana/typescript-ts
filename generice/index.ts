function userData <A,B>(name : A,age : B) {
    console.log(`name: ${name}, age: ${age}`);


}

userData("sathi", 25);


const userData2 = <A,B>(name : A,age : B) => {
    console.log(`name: ${name}, age: ${age}`);


}

userData2("sathi", 25)
userData2(23, "s")