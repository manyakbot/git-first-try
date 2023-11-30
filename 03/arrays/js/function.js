const func = (a, b) => { // объявление функции с параметрами
    return a + b
}
const result = func(10, 5); // func(10, 5) это вызов функции  с аргументами
console.log(result);


function basicOp(operation, value1, value2)
{
  if(operation == `+`) {
    return value1 + value2
  }
  else if(operation == `-`) {
    return value1 - value2
  }
  else if(operation == `*`) {
    return value1 * value2
  }else {
    return value1 / value2
  }
}
basicOp();