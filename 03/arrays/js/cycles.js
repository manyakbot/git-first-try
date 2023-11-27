const array = [1,2,34,5,4,3,34,];
function findEddElement(arr) {
    return arr.filter(item => item % 2 == 0)
}
console.log(findEddElement(array));