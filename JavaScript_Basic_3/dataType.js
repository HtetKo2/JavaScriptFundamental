
// Four Primitive Data Type


//  1.String        ["htet ko ko","mg mg","apple",...]
//  2.Number        [1,234,4.56,0.45,....]
//  3.boollean      [true,false]
//  4.Character     [A,B,c,a,b,...]  **have not in JavaScript & PHP



// Static Type              use in -- java,c++,...
// Loosely (Dynamic) Type   use in -- jacaScript,PHP,...


var myNum = 32 ;
console.log(typeof myNum);

var myStr = "htet ko ko";
console.log(typeof myStr);

var mybol = true ;
console.log(typeof mybol);


// 6 Datatypes in JavaScript

//  1.String        ["htet ko ko",'htet ko ko',`htet ko ko`,...]
//  2.Number        [1,234,4.56,0.45,....]
//  3.boollean      [true,false]
//  4.Null
//  5.Undifined
//  6.NAN(Not A Number)

let greet = "Htet Ko Ko";
console.log(greet);

let time = '3 o\'clock';
console.log(time);
let times = `3 o'clock`;
console.log(times);

//-------backtick sign + ${}

let name = "Htet Ko Ko";
let age = 22;
console.log(`My name is ${name}. My age is ${age}.`);
console.log(`My name is ${name}. \n My age is ${age}.`); //    \n =next line
console.log(`My name is ${name}. \t My age is ${age}.`); //    \t =tab



// String to Boolean

let myName = "Htet Ko ";
console.log(Boolean(myName)); // true or false 

// falsy values

//  1. 0
//  2. ""
//  3. null
//  4. undefined
//  5. NaN
//  6. false

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));



// Special Datatype


//  1. undefined
//  2. null
//  3. NaN



// undifined
//let x;              // Undifined
//console.log(x);

// null
let y = null;       //null
console.log(y);

// NaN
let num1;
let num2=1;
console.log(num1+num2)
