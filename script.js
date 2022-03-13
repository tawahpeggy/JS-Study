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
console.log(h > i);
console.log(h < i);
console.log(h >= i);
console.log(h <= i);
console.log(h === i);
console.log(h !== i);

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
console.log(true === 1, false === 0);//false false

// conditional statements

// if else
var myChild = ' Tawah Peggy', gender = 'female';
if (gender === 'female') {
    console.log(myChild + ' is my daughter');
} else {
    console.log(myChild + ' is my son');
}

// if else if
var prof = 'doctor';
if (prof === 'doctor') {
    console.log(prof + ' treates people');
}
else if (prof === 'instructor') {
    console.log(prof + ' teaches students');
}
else if (prof === 'composer') {
    console.log(prof + ' composes music');
}
else if (prof === 'Director') {
    console.log(prof + ' writes scripts');
} else {
    console.log(' profession does not exist ');

} /* when the engine finds a matching conditon, it terminates 
if else if block.so only one condition can
 be correct at once atleast the first correct one will be returned */

//  logical operators.(&&, ||, !)
if (!true) {
    console.log('value is false');
}
else {
    console.log('value is true');
}
if (5 === 5 && 4 === 4) {
    console.log('condition is true');
}
if (5 === 4 && 5 === 4) {
    console.log('conditon 2 is true');
}
if (5 === 5 || 5 === 6) {
    console.log('condition 3 is true');
}
if (5 === 5 == !6 === 6) {
    console.log("conditon 4 is true");
}
else {
    console.log('condition is false');
}

// coding task 1 
var johnScore = 80;
var nickScore = 45;
lowestPassScore = 51;
if (johnScore >= lowestPassScore && nickScore >= lowestPassScore) {
    console.log('congratulations you both passed');
}
else if (johnScore >= lowestPassScore || nickScore >= lowestPassScore) {
    console.log('wow just one person passed');


    if (johnScore > nickScore) {
        console.log('named john with a total of ' + johnScore);
    }
    else {
        console.log('named nick  with a total of ' + nickScore);
    }
}
else {
    console.log('you both failed');
}

// functions
// function statements
function passExam (name, score) {
    var passUni = 71;
    var passColl = 51;
    if(score >= passUni) {
        console.log(name + ' has enrolled in university with ' + score + ' points');
    }
    else if (score >= passColl) {
        console.log(name + ' has enrolled in college with ' + score + ' points');

    }
    else {
        console.log(name + ' has failed with ' + score + "points");
    }
}
function calcScore (quizScore, essayScore) {
    var score = quizScore + essayScore;
    return score;
}
passExam('peggy',calcScore(30,40));
passExam('mary',65);
passExam('bob', 45)

// function expression.
var sum = function (a, b) {
    console.log(a + b);
}
sum (20,30)

// Array

// defining an array using literal notation
var arr = [
    'john', 
    'bob', 
    'mary',
     10, 
     true,
      [1,2,3],
    //   pasing functions in arrays
    function (name) {
        return 'hello ' + name;
    }
    ];
console.log(arr);
console.log(arr.push({
    name:'peggy', age:24
}));

// accessing array content usin index.
console.log(arr[1]);

// acess an array in an array
console.log(arr[5][2]);
console.log(arr[6](arr[0]));

// creating an array using the array constructor
var arrayName = new Array(1,'john', false);
console.log(arrayName[2]);