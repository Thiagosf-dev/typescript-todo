var App;
(function (App) {
    ;
})(App || (App = {}));
;
/// <reference path="IProduto.ts" />
var App;
(function (App) {
    var Produto = /** @class */ (function () {
        function Produto(nome, descricao, valor) {
            this.nome = nome;
            this.descricao = descricao;
            this.valor = valor;
        }
        ;
        Produto.prototype.getNome = function () {
            return this.nome;
        };
        ;
        Produto.prototype.setNome = function (value) {
            this.nome = value;
        };
        ;
        Produto.prototype.getDescricao = function () {
            return this.descricao;
        };
        ;
        Produto.prototype.setDescricao = function (value) {
            this.descricao = value;
        };
        ;
        Produto.prototype.getValor = function () {
            return this.valor;
        };
        ;
        Produto.prototype.setValor = function (value) {
            this.valor = value;
        };
        ;
        Produto.prototype.getInfo = function () {
            return "Nome: " + this.getNome() + "\n                Descri\u00E7\u00E3o: " + this.getDescricao() + "\n                Valor: R$" + this.getValor() + "\n            ";
        };
        ;
        return Produto;
    }());
    App.Produto = Produto;
    ;
})(App || (App = {}));
;
/// <reference path="src/Produto.ts" />
var App;
(function (App) {
    var arroz = new App.Produto("Arroz", "Arroz Tipo-1 5KG", 15.73);
    document.getElementById("app").innerHTML = arroz.getInfo();
    document.getElementById("app").innerHTML += "\n        <p></p>\n        <span>NOME: <b>" + arroz.getNome() + "</b></span>\n        <br>\n        <span>DESCRI\u00C7\u00C3O: <b>" + arroz.getDescricao() + "</b></span>\n        <br>\n        <span>VALOR: <b>R$" + arroz.getValor() + "</b></span>\n        <br>\n    ";
})(App || (App = {}));
;
