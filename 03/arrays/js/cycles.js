const array = [2,234,42,32];
const elementOfArray = array[2];
const func = (arr, element ) => {
    return arr.indexOf(element);
}

console.log(func(array, elementOfArray));