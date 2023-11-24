const extractedGrades = [[{
    name: 'Diana',
    grades: {
        chemistry: 90,
        informatics: 95,
        mathematics: 90,
        physics: 90
    }
}, {
    name: 'Aigerim',
    grades: {
        chemistry: 95,
        informatics: 90,
        mathematics: 95,
        physics: 90
    }
}, {
    name: 'Aidana',
    grades: {
        chemistry: 90,
        informatics: 95,
        mathematics: 90,
        physics: 90
    }
}],
[{
    name: 'Stas',
    grades: {
        chemistry: 90,
        informatics: 95,
        mathematics: 90,
        physics: 90
    }
}, {
    name: 'Dima',
    grades: {
        chemistry: 95,
        informatics: 90,
        mathematics: 95,
        physics: 90
    }
}, {
    name: 'Oleg',
    grades: {
        chemistry: 90,
        informatics: 95,
        mathematics: 90,
        physics: 90
    }
}]];



const func = (grades) => {
    let counter = 0;
    let totalStudents = 0;
    for (i = 0; i < grades.length; i++) {
        for (j = 0; j < grades[i].length; j++) {
            counter += grades[i][j].grades.chemistry
            totalStudents++;
        }
    }
    return counter / totalStudents
}
console.log(func(extractedGrades));



