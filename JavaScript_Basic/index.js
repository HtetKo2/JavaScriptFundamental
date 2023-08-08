// let x=null

// if (x==10) {
//     console.log("x is 10");
// } else if(x>-1){
//     console.log("x is > 1");
// } else if(x<-1){
//     console.log("x is < 1");
// } else{
//     console.log("nothing")
// }

// function showName() {
    
//     alert("Hello");
// }


// showName();

// function mgMg() {
//     console.log("Nay Kaung Lar");
// }

// mgMg();


// let family=["mgmg","aungaung","koko"];


// family[1]="naing";
// family[2]="Kyawkyaw";

// console.log(family);

// let myBio=[];

// let insertDataMybio = (name,age,job)=>{
//     myBio.push(name);
//     myBio.push(age);
//     myBio.push(job);
// }

// insertDataMybio("mgmg","23","developer");
// let result = myBio
// console.log(result)

// let fruit = ["apple","orange","mango","banana"]

// console.log(fruit);


// console.log(fruit.indexOf("orange"));

// fruit.splice(1,2);

// console.log(fruit);

// console.log(fruit.includes("apple"))

// let num = [1,2,3,4,5];

// let result = num.map(function (n) {
//     return n+1
    
// })

// console.log(result)

// let nums = [1,2,3,4,5];

// let result = nums.filter(function (n) {
//     return n%2
    
// })

// console.log(result)


// let result= nums.map(n=>n+2);
// console.log(result);

// let results = nums.filter(n=>n%2)
// console.log(results);

// let a= nums.map(n=>n+2).filter(n=>n%2);
// console.log(a)

// let b = nums.reduce((a,n)=>a+n);
// console.log(b);

//  function
// var showMgMgAge=function(){
//     let age=23;
//     console.log("mg mg age is " +age);
// }

// showMgMgAge();


// function showNameAge(name,age) {
//     console.log(name+ " age is " +age);
    
// }

// showNameAge("Kyaw",34);





// ****for loop
// for (let i = 1; i < 5; i++){
//     console.log( "Hello World "+i)   
// }

// for (let i= 10; i>0; i--) {
//     console.log( "Hello World " +i )
    
// }


//***************** */

// let emails =["htetkoko@gmail.com","koko@gmail.com","mgmg@gmail.com","zawzaaw@gmail.com","kyawkyaw@gmail.com"];

// for (let i = 0; i < emails.length; i++) {
//     console.log(emails[i]);   
// }


// while


// let i=0;
// while (i<10){
//     console.log("Hello" +i);
//     i++;
// }
// console.log("Other code")


//************************* */
// let names=["mgmg","htetko","kyawkyaw","koko","zawzaw"];
// let i = 0;
// while (i<names.length){
//     console.log(names[i]);
//     i++;
// }
// console.log("Other code")

// do while

// let i =0;
// do {
//    console.log("hello world " +i);
//     i++
// } while (i<5);

// console.log("other code");

//------object

let person = {
    name:   "Aung Aung",
    age:    19,
    job:    "programmer",

    //****Three Way of Functions */
    // getName:function(){},
    // getName:()=>{},
    // getName(){},

    getName(name){
        //console.log("i am " + name)
        return ("i am " + name);
    },

};
console.log(person.name);
console.log(person.age);
console.log(person.job);

person.age = 29;
console.log(person.age);


//console.log(person.getName("Htet Ko Ko"));

var result = person.getName("Htet Ko K0")

console.log(result)


let car={
    name: "BNW",
    ManufactureDate : 2020,
     drive(){
        return ("My "+ this.name +" "+ this.ManufactureDate+ " is driving"
        //this = car
        )
     },
     stop(){
        return ("My "+ this.name +" "+ this.ManufactureDate+ " is stopping"
        //this = car
        )
     }
     
}

var driving = car.drive();
console.log(driving);
var stopping = car.stop();
console.log(stopping);


