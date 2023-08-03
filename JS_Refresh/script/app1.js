// import { name } from "./utils.js";
// console.log(name);

// import * as util from "./utils.js";
// console.log(util.name +" "+ util.lname);

// let x=7;
// console.log(x)
// x=9;
// console.log(x)

// var y=98;
// console.log(y)
// y=65;
// console.log(y)


// const z=45;
// console.log(z);
// z=23;
// console.log(z) //throw error


// function fullname(fname,lname,x,y){
//     console.log(fname+" "+lname);
//     console.log(x+y);
// }

// fullname('mihir','kumar',10,20);


// const user={
//     name:'Mihir',
//     location:"Bangalore"
// }
// console.log(user.location)
 

// const hobbies=['sports','cooking','reading'];
// console.log(hobbies);
// hobbies.push("coding");
// console.log(hobbies);

// const edit=hobbies.map((item)=>{
//     return item+"!";
// })
// console.log(edit)


//destructuring
// const [fname,lname]=["Mihir","kumar"];
// console.log(fname+" "+lname);

//destructuring object
// const{name:username,age}={
//     name:"Ravi",
//     age:34
// };
//  
// console.log(username);
// console.log(age)


//spread operator
// const x=[1,2,3,4];
// const y=[67,798];
// const z=[...x,...y];
// console.log(z)


// const password=prompt("your Password");
// console.log(password);

// setTimeout(()=>{
//     console.log("MIhir....")
// },5000);

// function timeout(){
//     console.log("Kumar")
// }
// setTimeout(timeout,4000)


function init(){
    function greet(){
        console.log("hello")
    }
    greet()
}

init();