const array = [1,2,3,4,5,6];

const averageOfArray = (arr) => {
    let counter = 0;

    for(i = 0; i < arr.length; i++) {
        counter += arr[i];
    }
    return counter / arr.length
}
console.log(averageOfArray(array));

const array1 = [1,2,3,4,5,6];

const averageOfArray1 = (arr1) => {
    
    const sum = arr1.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum / arr1.length;
}

console.log(averageOfArray1(array1));