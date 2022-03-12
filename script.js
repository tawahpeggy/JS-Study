console.log('Hello World');
// variables and data types
var firstName = "peggy";
var lastName = "tawah",
    age = 24,
    level = 11
    ;
var person = 'teacher';
console.log(person);
person = 'Engineer'
console.log(firstName, lastName, level, age, person);
// primitive data types

// string
var str = "john is an instructor";
console.log(str);

// number
var num = 27;
console.log(num);

// boolean
var num1 = 45;
var num2 = 50;
if (num1 !== num2) {
    console.log(false);
}

// undefined
var a;
console.log(a);

// b is not defined
// console.log(b);

// null
var c = null;
console.log(c);

// operators
// mathmatical
var d = 45 + 78;
var e = 400 - 380;
var f = 600 / 300;
var g = 544 * 5467;
console.log(d, e, f, g);
// operators make use of BODMAS(operator precedence).

//comparism operators
var h = 5;
var i = 5;
console.log(h>i);
console.log(h<i);
console.log(h>=i);
console.log(h<=i);
console.log(h===i);
console.log(h!==i);

if (h == i) {
    console.log("h is same as i with value : ", h);
}
if (h > i) {
    console.log("h is not same as i with value : ", h);
}

i = '5'
if (h === i) {
    console.log("h is fully i");
}
if (h < i) {
    console.log("h is less than i  with value : ", i);
}
if (h !== i) {
    console.log("h is not same as i with value : ", h);
}

// type coesion
var j = 10 + '5';
console.log(j);

var k = 10 * 5;
console.log(k);

var l = 'b' + 10 + 5;
console.log(l);

var m = 10 + 5 + 'b';
console.log(m);

console.log(5 === 5); //true
console.log(5 === 5 === 5) //false
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true === 1,false === 0);//false false

// conditional 
// if else
var myChild = ' Tawah Peggy',gender = 'female';
if (gender==='female') {
    console.log(myChild + ' is my daughter');
} else{
console.log(myChild + ' is my son');
}




