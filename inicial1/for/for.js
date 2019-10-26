var listCar = ["Fusca", "Brasília", "Fiat 147"];
for (var i = 0; i < listCar.length; i++) {
    // variável i é o índice do array
}
listCar.forEach(function (car) {
    // car é o valor do array no índice atual
});
listCar.forEach(function (car, i) {
    // variável car é o valor do array no índice atual
    // variável i é o índice do array
});
listCar.forEach(function (car, i, array) {
    // variável car é o valor do array no índice atual
    // variável i é o índice do array
    // variável array é a lista original que está sendo percorrida
});
for (var car in listCar) {
    // variável car é o índice do array
}
for (var _i = 0, listCar_1 = listCar; _i < listCar_1.length; _i++) {
    var car = listCar_1[_i];
    // variável car é o valor no índice atual do array
}
