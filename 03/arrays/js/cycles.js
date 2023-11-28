const myFriend = {
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

console.log(friend);
console.log(friendTwo);
