const objectsOfArray = [{
    name: 'Stas',
    age: 26
}, {
    name: 'Oleg',
    age: 24
}, {
    name: 'Dima',
    age: 24
},];

const sortOfFunc = (obj) => {
    return obj.sort((a, b) => a.age - b.age) // сортирует по возростанию
}
const newObject = sortOfFunc(objectsOfArray);
console.log(newObject);