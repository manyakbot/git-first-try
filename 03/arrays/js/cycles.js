const students = [{
    name: 'Diana',
    age: 13
}, {
    name: 'Margarrita',
    age: 13
}, {
    name: 'Karolina',
    age: 12
}];
let counter = 0;
for(i = 0; i < students.length; i++) {
    // document.write(students[i].name + " " + students[i].age + " years old", '<br>');
    counter += students[i].age
    
}
document.write(counter / students.length)