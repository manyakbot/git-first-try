const studentGrades = [{
    name: 'Oleg',
    age: 24,
    grades: {
        physisc: 80,
        chemistry: 50,
        mathematics: 75,
        informatics: 90
    }
}, {
    name: 'Anton',
    age: 19,
    grades: {
        physisc: 70,
        chemistry: 70,
        mathematics: 75,
        informatics: 70
    }


}, {
    name: 'Stas',
    age: 21,
    grades: {
        physisc: 75,
        chemistry: 78,
        mathematics: 90,
        informatics: 95
    }

}, {
    name: 'Dima',
    age: 23,
    grades: {
        physisc: 90,
        chemistry: 90,
        mathematics: 95,
        informatics: 90
    }
}];

let sum = 0;

const getStudensArray = (studentGrades) => {
    for (i = 0; i < studentGrades.length; i++) {
            sum += studentGrades[i];
    }
}
console.log(sum);
