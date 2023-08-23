let x;


const num = [12,14,56,33,23,65,75];
const arr =[12, 'hello', null, undefined, true];
const color = new Array('red', 'black', 'pink', 'blue');


x = num[0];

x =num[1] + num[0];

x = `My Fevorite color is ${color[1]}`;

x = num.length;
x = color.length;

color[2] ='green';  
// color.length = 2;

color[color.length]= 'pink'; 


// console.log(num);
// console.log(arr);
// console.log(color);
// console.log(x);


//Array Methods

const number = [12,23,21,44,76];


// array index start 0 1 2 3 4..........

number.push(23);   //add element last index

number.pop();  // remove the last index element

number.shift(); // remove zero index element

number.unshift(43); //add element in zero index

number.reverse(); // reverse the array example [1,2,3] = [3,2,1]

// console.log(number);


let  y;

const numbers = [12,23,21,44,76];


y = numbers.includes(12); 
// return true and false 

y = numbers.indexOf(21);

y = numbers.slice(1);
y = numbers.slice(1,3);
y = numbers.slice(2,3);


// y = numbers.splice(1);
// y = numbers.splice(1, 4);

// y =numbers.splice(3, 1);

// y =numbers.toString();


// console.log(y);


// Array Nesting Concat &  Spread


let a;

const colors = ['red', 'green', 'pink', 'black'];
const fruits = ['apple', 'mango', 'orange'];

// colors.push(fruits);


// a = colors[4];

// a =colors[4][0];

const arrays = [colors, fruits];

a =arrays[1][1];

// console.log(arrays);

a = colors.concat(fruits);

// Spread Operator

 a = [...colors, ...fruits];

const Arr =[1,2,3,[4,5],6,[7,8],9];
a = Arr.flat();

// console.log(Arr);

a =Array.isArray(Arr);

a =Array.from('12345');

const a1 ='how'
const a2 = 'are'
const a3 ='you'

a = Array.of(a1,a2,a3);

// const ArrayNum = [1,2,3,4,5];

// a = ArrayNum.reverse();

// ArrayNum.push(0);

// ArrayNum.unshift(6);


const arr1 =[1,2,3,4,5];
const arr2 =[5,6,7,8,9,10];

// const arr4 = arr1.slice(0,4).concat(arr2);
// console.log(arr4);

// const arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);
// console.log(arr3);




// console.log(a);


