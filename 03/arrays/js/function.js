const func = (a, b) => { // объявление функции с параметрами
    return a + b
}
const result = func(10, 5); // func(10, 5) это вызов функции  с аргументами
console.log(result);



function positiveSum(arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
          counter += arr[i];
        }
    }
    return counter;
  }

  const array = [1,-4,2,12];
  const currentArray = positiveSum(array);
  console.log(currentArray);