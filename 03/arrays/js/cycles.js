const array = [1,2,2,1,3,4,5];

const deleteDublicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(deleteDublicates(array));

