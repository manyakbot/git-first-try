const func = (a, b) => { // объявление функции с параметрами
    return a + b
}
const result = func(10, 5); // func(10, 5) это вызов функции  с аргументами
console.log(result);


function lovefunc(flower1, flower2){
  return (flower1 %2 === 0 && flower2 %2 !== 0) || 
  (flower1 %2 !== 0 && flower2 %2 === 0) ? true : false
}

console.log(lovefunc(1, 4))