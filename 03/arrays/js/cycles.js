
const drawCats = (howManyTimes) => {
    let counter = 0;    
    for(i = 0; i < howManyTimes; i++) {
        // console.log(i + " =^.^=");
        counter += i;
    }
    return counter / howManyTimes;
}
console.log(drawCats(10));
console.log(drawCats(10));

