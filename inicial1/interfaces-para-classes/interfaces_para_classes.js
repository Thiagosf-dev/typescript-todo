/**
 * Declarando uma classe que implementa uma Interface
 */
var Classe1 = /** @class */ (function () {
    function Classe1(texto) {
        this.texto = texto;
    }
    ;
    Classe1.prototype.contadorTexto = function () {
        return this.texto.length;
    };
    return Classe1;
}());
var c1 = new Classe1("Texto"); // imprime: { texto: Texto }
var Classe2 = /** @class */ (function () {
    function Classe2(texto) {
        this.texto = texto;
    }
    ;
    Classe2.prototype.contadorTexto = function () {
        return this.texto.length;
    };
    Classe2.prototype.imprimir = function (value) {
        var v = value;
    };
    return Classe2;
}());
var c2 = new Classe2("Textos"); // imprime: { texto: Texto2 }
c2.imprimir("Texto2"); // atribui a variável o valor passado como parâmetro
