const listOfStudents = {
    44: {
        name: 'Oleg',
        age: 16,
        course: 'english'
    },
    46: {
        name: 'Stas',
        age: 17,
        course: 'italiano'
    },
    55: {
        name: 'Dima',
        age: 15,
        course: 'german'
    },
}

function updateData (list, id, property, value) {
        if(value === "Stas"){
            delete list[id][property];
        }else if(value === "Stas"){
            list[id][property] = "Kon4a";
        }else if(value !== "Stas"){
            list[id][property] = value;
        }
    return list;
}

const result = updateData(listOfStudents, 46, name, "Krasav4ik");
console.log(result);