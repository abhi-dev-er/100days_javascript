// Ways to declare a variable
// var , let, const

var firstName = 'john'

firstName = 'johns'

console.log(firstName);


let first_name = 'john'

first_name = 'johnson'
console.log(first_name);



const firstname = 'jonny'
 
// firstname = 'johnson' 

// out put typeError because const cannot be Reassigned

console.log(firstname);


// Naming Conventions 
// only use letters, numbers, underscores and dollar signs


// can't start variable name with a numbers

// let 1firstName = 'john'
// SyntaxError because variable start with a numbers



// use variable names in

// firstName = camlCase
// first_name = underscore
// FirstName = PascalCase
//firstname = lowercase

let score;

score =1;

console.log(score);


const arr = [1,2,3,4];

// arr = [3,4,5.5]

//this so error because const cannot be Reassigned

arr.push(5);

console.log(arr);


const obj = {
    name: 'john',
    age: 23
}

// obj = {
//     name: 'jerry',   
//     age: 21
// }

//this so error because const cannot be Reassigned

obj.name = 'tom'
console.log(obj);




// Declare multiple values at once

let x,y,z;

x= 10;
y= 20;
z = 30;

console.log(x,y,z);

let a,b,c;

const d = 40, e = 50, f = 60;
console.log(d);

console.log(a);  //undefined