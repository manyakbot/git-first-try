const arr0 =  [1,2,3,4,5];

const sumOfArray =(array) => {
    let counter = 0;
    for(i = 0; i < array.length; i++) {
        counter += array[i];
        
    }
    return counter;
}
console.log(sumOfArray(arr0));
