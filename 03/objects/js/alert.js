let count = 0;

const cc = (card) => {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;    
        case 7:
        case 8:
        case 9:
            count;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
    }
    return count > 0 ? count + ' Bet': count + ' Hold';

}

console.log(cc(10)); console.log(cc("J")); console.log(cc("Q")); console.log(cc("K")); console.log(cc("A"));