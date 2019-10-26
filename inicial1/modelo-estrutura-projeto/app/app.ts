/// <reference path="src/Produto.ts" />

module App {
    let arroz: Produto = new Produto(
        "Arroz",
        "Arroz Tipo-1 5KG",
        15.73
    );

    document.getElementById("app").innerHTML = arroz.getInfo();
    document.getElementById("app").innerHTML += `
        <p></p>
        <span>NOME: <b>${arroz.getNome()}</b></span>
        <br>
        <span>DESCRIÇÃO: <b>${arroz.getDescricao()}</b></span>
        <br>
        <span>VALOR: <b>R$${arroz.getValor()}</b></span>
        <br>
    `;
};