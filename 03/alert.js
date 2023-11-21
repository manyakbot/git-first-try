let count = 0;

const cc = (card) => {
    if(card >= 2 && card <= 7){
        return ((count += 1) + ' Bet');
    }
    else if(card >= 7 && card <= 9) {
        return ((count-- ) + ' Hold');
    }
    else if(card == 10 && card == 'J' && card == 'Q' && card == 'K' && card == 'A') {
        return ((count) + ' Hold');
  }

    return count;


}

console.log(cc(10)); console.log(cc('J')); console.log(cc('Q')); console.log(cc('K')); console.log(cc('A'));