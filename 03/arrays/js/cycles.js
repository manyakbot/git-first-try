const array = [1,2,3,4,5];
const func = (arr) => {
    return arr.map(item => 10*item)
}
const callArray = func(array);
console.log(callArray);