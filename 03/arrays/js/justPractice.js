const averageOfNumbers = (array) => {
    let counter = 0;

    for (i = 0; i < array.length; i++) {
        counter += array[i];
    }
    return counter / array.length;
}
const currentArray = [1, 2, 3, 4, 5];
const callArray = averageOfNumbers(currentArray);

console.log(callArray);