const inEnglish = 'Hello';
const inRussian = 'Привет';

// const greet = {
//     inEnglish, //
//     inRussian, //для такой сокращенной записи название свойство объекта и переменной должны быть одинаковы
//     inKazakh() {
//         console.log('Саламатсызба!');
//     }
// }
// greet.inKazakh();

const greet = {
    inEnglish, inEnglish,
    inRussian, inRussian, 
    inKazakh() {
        console.log('Саламатсызба!');
    }
}
greet.inKazakh();
console.log(greet.inEnglish, greet.inRussian)