const fc = (array) => {
  return Math.max(...array)
}
const array = [1,2,3,4,5];
const resultFc = fc(array);
console.log(resultFc);

setTimeout(()=> {
  console.log(fc(array));
}, 1000);