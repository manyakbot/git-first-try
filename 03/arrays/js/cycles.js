const shoppingList = [
    ['milk', 'bread', 'eggs'],
    ['juice', 'ice cream'],
    ['cat food', 'shampoo']
];

for (i = 0; i < shoppingList.length; i++) {
    for (j = 0; j < shoppingList[i].length; j++) {
        document.write(shoppingList[i][j], '<br>');
    }
}