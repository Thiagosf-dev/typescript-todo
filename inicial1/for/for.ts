let listCar: string[] = ["Fusca", "Brasília", "Fiat 147"];

for (let i = 0; i < listCar.length; i++) {
    // variável i é o índice do array
}

listCar.forEach(car => {
    // car é o valor do array no índice atual
});

listCar.forEach((car, i) => {
    // variável car é o valor do array no índice atual
    // variável i é o índice do array
});

listCar.forEach((car, i, array) => {
    // variável car é o valor do array no índice atual
    // variável i é o índice do array
    // variável array é a lista original que está sendo percorrida
});

for (const car in listCar) {
    // variável car é o índice do array
}

for (const car of listCar) {
    // variável car é o valor no índice atual do array
}
