/*const myFriend = {
    name: 'Stas',
    gender: 'Gay' 
}                    // но это не относиться к вложенным объектам. Они также будет как раньше изменяться!

const copyObj = Object.assign({}, myFriend); // Object.assign не дает мутировать объекту!
// const copyObj = myFriend;
copyObj.gender = 'Is not a Gay';
console.log(myFriend);
console.log(copyObj);

const friend = {
    name: 'Dima',
    age: 24,
    gender: {
        isHeAGay: true
    }
}

const friendTwo = JSON.parse(JSON.stringify(friend)); // этот медот полностью создает копью объекта.
friendTwo.name = 'Stas';
friendTwo.age = 26;
friendTwo.gender.isHeAGay = false

const friendThree = {... friendTwo};
friendTwo.name = 'Kot4';
friendTwo.age = 35;
friendTwo.gender.isHeAGay = false

console.log(friend);
console.log(friendTwo);
console.log(friendThree);
*/


// Задача -  1. Создание объекта:
const nameOfBook = 'Naruto';
const authorOfBook = 'Masashi Kishimoto';
const yearOfRelease = 1999;
const book = {
    nameOfBook,
    authorOfBook,
    yearOfRelease
}
console.log(book);


// Задача -  2. Изменение свойств:
const car = {
    name: 'BMB',
    model: 'X5',
    release: 2010
}
const updateOfCar = {... car};
updateOfCar.release = 2011;
console.log(car)
console.log(updateOfCar);


// Задача -  3. Добавление свойств. И Задача - 7. Объединение объектов. В одном задании.
const myPc = {
    processor: 'AMD',
    RAM: 32,
}
myPc.disk = '1TB';
console.log(myPc);
let value = '970GB';
if(myPc.hasOwnProperty('SSD')) {
    myPc[SSD] = value;
}else {
    myPc.SSD = value;
}


// Задача -  4. Цикл по свойствам:
const myFavoriteBooks = {
    'I shall see heavens': 'Ergen',
    naruto: 'Kishimoto Masashi',
    onePiece: 'Oda'
}
for(let key in myFavoriteBooks) { // вот так используется цикл для объектов!
    if(myFavoriteBooks.hasOwnProperty(key)) {
        console.log(key + ': ' + myFavoriteBooks[key]);
    }
};


// Задача -  5. Удаление свойств:
const myPlanets = {
    mercury: 1,
    mars: 4,
    earth: 3
}
delete myPlanets.mars
console.log(myPlanets);


// Задача -  6. Объединение объектов:
const firstFriend = {name: 'Oleg', age: 24, averageOfGrades: 3}
const secondFriend = {name: 'Stas', age: 26, averageOfGrades: 4}
const group = { ...firstFriend, ...secondFriend };
console.log(group);


// Задача -  8. Копирование объекта:
const myPhone = {
    name: 'Iphone',
    model: 8,
    price: 400,
    color: 'black'
}
const copyOfMyPhone = JSON.parse(JSON.stringify(myPhone));
copyOfMyPhone.color = 'white';
console.log(myPhone);
console.log(copyOfMyPhone);


// Задача -  9. Методы объекта:


// Задача -  10. Сравнение объектов:
const book1 = {
    title: 'Naruto',
    chapters: 700
}
const book2 = {
    title: 'One Piece',
    chapters: 1500
}

const comparingTwoObjects = book1.chapters > book2.chapters ? 
        'The Masashi Kishimoto is the best' : 
        'Nah, One piece author is the best!';
console.log(comparingTwoObjects);