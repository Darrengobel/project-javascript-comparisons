const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA == nameB
const nameComparedtwo = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)


const ageA = 18
const ageB = 25

if (ageA > ageB) {
    console.log('Welcome to the club')
    document.write('Welcome to the club')
} else if (ageA < ageB) {
    console.log('You are not old enough')
    document.write('You are not old enough')
} else {
    console.log('You both can enter')
    document.write('You both can enter')

const personA = {
    name: 'Alpha',
    age: 20
}

const personB = {
    name: 'Betty',
    age: 30
}

switch (personA.age > personB.age) {
    case true:
        console.log('Alpha is older than Betty')
        break
    case false:
        console.log('Betty is older than Alpha')
        break
    default:
        console.log('same age')
}

const personC = {
    name: 'Darren',
    age: 60
}

const personD = {
    name: 'Chris',
    age: 50
}

let age = prompt(`how old are you?`)

switch (age) {
    case "1":
        console.log('Same Age')
        document.write('SameAge')
        break
    default:
        console.log('Older than 1')
        document.write('Older than 1')
}

first_input = prompt("Input Number 1")
second_input = prompt('Input Number 2')
third_input = prompt('Input Number 3')

var final_score;
var addition = parseInt(first_input) + parseInt(second_input) + parseInt(third_input)
var average = addition / 3
var course_round = Math.round(average);

if (average > 90) {
    final_score = "A";
}
else if (average > 80) {
    final_score = "B";
}
else if (average > 71) {
    final_score = "C";
}
else if (average > 65) {
    final_score = "D";
}
else
    final_score = "F";

switch (final_score) {
    case "A":
        window.alert("Great job, keep it up!");
        break;
    case "B":
        window.alert("very nice work!");
        break;
    case "C":
        window.alert("You can do it, keep studying");
        break;
    case "D":
        window.alert("You some need help, see the teacher");
        break;
    case "F":
        window.alert("Please schedule an appointment with your advisor");
}
document.write("Your three exams scores are:  ");
document.write("Exam 1: " + first_input + " ");
document.write("Exam 2: " + second_input + " ");
document.write("Exam 3: " + third_input + " ");
document.write("Average: " + average + " ");
document.write("Course_grade " + final_score);
}