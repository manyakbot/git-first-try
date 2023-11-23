const concatArrays = (array0, array1) => {
    return array0.concat(array1);
} 

const array = [1,2,3,4,5];
const array2 = [6,7,8,9,10]
const arr = concatArrays(array, array2); 
console.log(arr);