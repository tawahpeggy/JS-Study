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
function passExam(name, score) {
    var passUni = 71;
    var passColl = 51;
    if (score >= passUni) {
        console.log(name + ' has enrolled in university with ' + score + ' points');
    }
    else if (score >= passColl) {
        console.log(name + ' has enrolled in college with ' + score + ' points');

    }
    else {
        console.log(name + ' has failed with ' + score + "points");
    }
}
function calcScore(quizScore, essayScore) {
    var score = quizScore + essayScore;
    return score;
}
passExam('peggy', calcScore(30, 40));
passExam('mary', 65);
passExam('bob', 45)

// function expression.
var sum = function (a, b) {
    console.log(a + b);
}
sum(20, 30)

// Array

// defining an array using literal notation
var arr = [
    'john',
    'bob',
    'mary',
    10,
    true,
    [1, 2, 3],
    //   pasing functions in arrays
    function (name) {
        return 'hello ' + name;
    }
];
console.log(arr);
console.log(arr.push({
    name: 'peggy', age: 24
}));

// accessing array content usin index.
console.log(arr[1]);

// acess an array in an array
console.log(arr[5][2]);
console.log(arr[6](arr[0]));

// creating an array using the array constructor
var arrayName = new Array(1, 'john', false);
console.log(arrayName[2]);

// array methods

// update
var colors = ['white', 'black', 'red'];
colors[1] = 'green';
// add item at end of an array
colors.push('blue');
// remove item at end of an array
colors.pop();
// remove item at beginning of an array
colors.shift();
// add items at beginning of an array
colors.unshift('purple');
// getting index of an item in an array
console.log(colors.indexOf('red')); //returns -1 if item doesn't exist.
if (colors.indexOf('blue') === -1) {
    console.log(colors.push('blue'));
}
console.log(colors);

// objects
// creating obects.
// 1. using the constructor notation ie the "new" keyword.

var person = new Object();
person.firstName = 'john';
person.lastName = 'smith';
person['job'] = 'instructor';
person.son = {};
person.son.sex = 'male';
person.son.age = 24;
console.log(person, person.firstName, person.lastName);

// 2.literal notation
var people = {
    firstname: 'tawah',
    lastname: 'peggy',
    age: 24,
    daughter: {
        name: 'mary',
        age: 3,
        class: 4
    },
    myfunction: function (daughterName, FatherName, DaughterAge) {
        console.log('Hello world!! ' +
            daughterName + ' is the daughter of ' +
            FatherName + ' and she is '
            + DaughterAge + ' years old. '
        );
    },
    herFunction: function (par) {
        console.log(par.daughterName + ' is the daughter of ' +
            par.FatherName + ' and she is '
            + par.DaughterAge + ' years old. ');
    }
};
console.log(people);
people.myfunction(people.daughter.name,
    person.lastName + person.firstName,
    people.daughter.age);

people.herFunction({ daughterName: 'jessy', FatherName: 'micheal', DaughterAge: 3 })

// loops
// for loop
var names = ['john', 'peggy', 'bob', 'micheal', 'salem', 'bercque'];
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
    if (names[i] === 'peggy') {
        console.log(names[i] + " is my sister");
        continue; //prints all items except 'peggy'. no code is ran after this line 
        break; // break when it meets 'peggy' 

    }

}

// while loops.
var j = 0;
while (j <= 10) {
    j++;
    console.log(j);
}

var numbers = [1, 2, 3, 4];
var i = 0;
while (i <= numbers.length) {
    console.log(i);
    i++
}

// do while loop
var nums = [1, 2, 3, 4];
var i = 0;
do {
    console.log(nums[i]);
    i++;
} while (i < numbers.length); //in do while loop, first iteration is always executed weather condition is right or wrong.

// the date inbuilt object methods.
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth(); //months are 0 based meaning januar is 0 feb is 1 etc
var day = date.getDay();
var hour = date.getHours();
var mins = date.getMinutes()
var millisecs = date.getMilliseconds();
console.log(millisecs, mins, hour, day, month, year);
console.log(date);
// coding challenge
var students = [
    { name: 'john', score1: 47, score2: 46 },
    { name: 'bob', score1: 23, score2: 24 },
    { name: 'nick', score1: 40, score2: 35 },
    { name: 'alex', score1: 44, score2: 45 }
];
var diploma = ['A', 'B', 'C', 'D', 'E'];

var degrees = [91, 81, 71, 61, 51];

function scoreFunction(scoreOf1, scoreOf2) {
    var totalScore = scoreOf1 + scoreOf2

    return totalScore;
}
function finalScore() {
    for (var i = 0; i < students.length; i++) {

        students[i].totalScore = scoreFunction(students[i].score1, students[i].score2
        );
        if (students[i].totalScores >= 51) {
            console.log(students[i].name + ' passed final exam successfully: ');

            for (var x = 0; x < degrees.length; X++) {

                if (students[i].totalScores >= totalScores[x]) {

                    console.log('he has ' + students[i].totalScores + 'points and he got diploma with degree ' + degrees[x]);
                    break;
                }
            }
        }

    }
}
finalScore();
console.log(students);

// lexical scope prove 
var a = 1;
function addValues(a, b) {
    var sum = a + b;
    console.log(sum);
}
var obj = {
    name: 'nick',
    b: function b() {
        return 'Hi'
    }
}
var b = 8;
addValues(a, b);

// execution context.
var firstName = 'John';
console.log(firstName);

function ai() {
    console.log('Hello');
    bi();
}
function bi() {
    console.log('Hi!')
}
ai();
var lastName = 'smith';
console.log(lastName);


// execution context 2
function av() {
    var name = 'john';
    bv();
    console.log(name);
}

function bv() {
    var name = 'bob';
    cv();
    console.log(name);
}
function cv() {
    var name = 'nick';
}

av(); // strangely,output is nick bob john.

// Execution stack 
// function an() {
//     an();
// }
// an(); // outputs:maximum stack exceded

// scoping and scope chain
var num1 = 5;
function as() {
    var num2 = 10;
    function bs() {
        var num3 = 15
        console.log(num3 + num2 + num1);
    }
    bs();
}
as();

// hoisting
console.log(myName);
function myAge() {
    var myRealAge;
    console.log(myRealAge);
    myRealAge= 30;
    console.log(myRealAge);
    return 24;
}
var myName = 'tawah peggy';
console.log(myAge());

// try and see.
if (true) {
    var where = 'molyko';
    
}
else {
   var town = 'Buea';
}
console.log(where); //outputs: molyko
console.log(town); // outputs: undefined

// objects vs primitives.
var ao = 10;
var bo = ao; //bo copies content of ao
ao = 15;
console.log(ao , bo);
var c = {
    name: 'john'

};
var d = c; // d becomes a reference for the object same as c
c.age = 'nick';
c = {
    age  :  'bob'
};

// the 'this' special keyword
var firstName = 'bob';
var per = {
    firstName :'John',
    lastName : 'smith',
    getFullName :function () {
        console.log(this===per);
        function greet() {
            console.log('hi' + this.firstName); // outputs hi undefined
        }
        greet();
        console.log( per.firstName+ ' ' + per.lastName //here one can replace per with this.
         ); 
        }
}
console.log(per.getFullName());

// Document Object Model

// Select the element or group of elements that we want to effect
// Decide the effect we want to apply to the selection
var submit = document.getElementById('submit')
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'red';
document.getElementById('btn').style.color = 'black';
document.getElementById('btn').style.backgroundColor = 'yellow';

//assign to variable
// const element = document.getElementById('element');
const win = window;
console.log(win.document.location);

// return a node object or a node list,which is an arraylike object
const btn = document.getElementById('btn');
let name = btn.nodeName;
console.log(name);
submit.style.fontSize = '1rem';
submit.style.margin = ' 1rem ';
submit.style.fontWeight = 'bold';
submit.style.borderRadius = '1rem';
submit.style.backgroundColor = 'yellow';
submit.style.color = 'rgba(0, 0, 0, 0.7)';
submit.style.float = 'right';
submit.style.padding = '.8rem';
submit.style.width = '9rem';
submit.style.boxShadow = '2px 3px 20px grey'; //offset-x, ofset-y,blur-radius,color

// manipulating of DOM using classes.
var special = document.getElementsByClassName('special');
console.log(special);
special[0] .style.color = 'black';
special[1] .style.color = 'black';
special[2] .style.color = 'black';
special[0] .style.fontSize = '1.4rem';

// Query selector
const result = document.querySelector('#result');
result.style.backgroundColor = 'green';

const item = document.querySelectorAll('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

list = document.querySelectorAll('.special');
list.forEach(function(item){
    console.log(item);
    item.style.color =  'yellow';
})
// var lis = querySelectorAll('li');
// console.log(lis);
// ChildNodes
const allChildren = result.childNodes;
console.log(allChildren);

// Advance javascript.
// Everything in js is an object except primitives.
 var arr = [1,2,3];
 arr[5] = 4;
 arr.prop = 'Hello';
 arr.come = '1234'
 console.log(arr);

//  function as special object
 function aex() {
     console.log('Hey babe');
 }
 aex['prop'] = "Hi";

 aex.greetings = {
     greet:'Hey Fatty'
 };
 aex.famousGreet = function () {
     console.log(famousGreet);
 }
 aex();
 console.log(aex.greetings);

//  creating object in a sophisticated way IE using functions(function constructors)
function createPerson(lastname,firstname) {
    var newPerson ={firstName:firstname,
                     lastName: lastname};
    console.log(newPerson);
}
createPerson('bob','smith');
createPerson('Nathan','Joel');
createPerson('tawah','peggy');

// everything except primitive datatypes in javascript is an object.
var arr = [1,2,3,]
arr[3]=4;
arr.name = 'peggy'; //arrays are objects
console.log(arr.name);
console.log(arr);

// fnctions are objects
function aiuy() {
    console.log('hello!');
}
aiuy.obj = {
    greet:'hey'
}
aiuy['prop'] = 'hi'
aiuy.myFunc = function () {
    console.log('hola');
}
aiuy();

// prototypes
// never reassign value of __proto__ bc it breakes prottype chain
// native prototypes prototype chains
// prototype inheritance

// Classes
class myClass {
    info(){
        console.log('thanks');
    }
}
