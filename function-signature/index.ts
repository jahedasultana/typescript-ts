// function signature - function signature tell function type and return type
let userInfo1: () => string;
let userInfo2: (name: string) => void;

userInfo1 = () => {
    return 'bdfedfe'
}
userInfo2 = (name: string) =>{
    console.log("azhdfug");
}


let userInfo3: (name: string,age: number) => string;
userInfo3 = (name: string,age: number) =>{
    return "azhdfug"
}

userInfo3("vgf",23)
userInfo2("fdhaf")
userInfo1()