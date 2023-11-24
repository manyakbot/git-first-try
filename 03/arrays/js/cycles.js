// const array = [1,2,3,4,5];
// const func = (arr) => {
//     return arr.map(item => 10*item)
// }
// const callArray = func(array);
// console.log(callArray);

// const arr0 = [1,2,3,4,5];
// const convertArray = arr0.map(item => " " + item);
// console.log(convertArray);

const newObject = [
    {name: "James", age: 17}, 
    {name: "Aida", age: 12}
];
const convertArr = newObject.map(item => item.name);

console.log(convertArr);