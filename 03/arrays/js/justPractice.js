const searchUnicalElements = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
}
const arr = [1,2,3,4,5,5,2,3,4,6];
const callArr = searchUnicalElements(arr);
console.log(callArr);