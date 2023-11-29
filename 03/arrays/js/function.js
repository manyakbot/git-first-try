const func = (a, b) => { // объявление функции с параметрами
    return a + b
}
const result = func(10, 5); // func(10, 5) это вызов функции  с аргументами
console.log(result);


const findALetter = (string) => {
    return string.split('').filter((char) => char === 'a').length; // принимает строку и возвращает количество букв "а" в ней 
}
console.log(findALetter('Olzhabay'));

