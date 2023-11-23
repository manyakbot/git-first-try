function filtOfNumbers (array) {
    return array.filter(number => number % 2 == 0);
}
const arr = [2,443,56,312];
const onlyEvenNumbers = filtOfNumbers(arr);

console.log(onlyEvenNumbers);