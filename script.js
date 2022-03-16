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

var b = 8;
addValues(a, b);