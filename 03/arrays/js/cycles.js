const array = [1,2,34,32,2,1,2,34,5];

const countElements  = (arr, target) => {
    return arr.reduce((count, element) => (element === target ? count + 1 : count), 0);
}
const targetElement = 2;
console.log(countElements(array, targetElement));