const array = [1,2,3,4];

function massiv(arr) {
    return arr.reduce((acc, currentValue) => acc + currentValue, 0 )
}
console.log(massiv(array));