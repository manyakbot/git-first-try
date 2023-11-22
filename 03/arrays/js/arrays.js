

const books = [[['War and love'], [], []],
[[], [], ['Master and Margarita']],
[[], ['Crime and Punishment'], []]];


for(i = 0; i < books.length; i++) {
    for(j = 0; j < books.length; j++){
        if(books[i][j].length > 0){ // проверям пустой ли массив
            console.log(books[i][j])
        }
        else {
            console.log('If you see it, congratz you find empty array');
        }
    }
}
console.log(books[0][0][0], books[1][2][0], books[2][1][0]);
