let x;

const name ='john';
const age = '23';

// console.log(name);
// console.log(age);


// using template literals

x = `Hello My Name Is ${name} and I'm  ${age} years old`

// methods

let a = 'hello world'

x = a.length;
// console.log(typeof a);

x = a[0];

x = a.__proto__;

x = a.toUpperCase();
x = a.toLowerCase();

x = a.charAt(0);

x = a.indexOf('e');

x = a.substring(0, 4);

x = a.substring(5);

x = a.slice(0, 4);


// a = '             hello john';
// x = a.trim(); // remove white space

x = a.replace('john', 'world'); //replace 

x = a.includes('john');   //true
x = a.includes('world');   //false

x = a.valueOf();

x = a.split(' ');
x = a.split('');

// console.log(x);


const myString = 'developer';

const NewString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myString);
console.log(NewString);
