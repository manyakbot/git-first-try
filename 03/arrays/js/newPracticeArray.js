const shoppingList = [{
    orderFromMom: {
        shop0: 'milk',
        shop1: 'bread',
        shop2: 'eggs'
    }
}, {
    orderFromDad: {
        shop0: 'Beer',
        shop1: 'Fish',
        shop2: {
            name: 'Bicycle',
            model: 'BMX',
            color: 'Black-white',
            price: 25000
        }
    }
}, {
    orderFromBrother: {
        shop0: 'Cheese',
        shop1: 'Beer',
        shop2: null
    }
}];

let changeOrder = shoppingList[2];
changeOrder.orderFromBrother.shop2 = 'Chocolate';
console.log(changeOrder.orderFromBrother);

