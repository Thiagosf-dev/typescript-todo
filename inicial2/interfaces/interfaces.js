;
// criando uma variável do tipo da Interface
var prod = {
    nome: "Produto",
    valor: 1
};
// classe implementando uma Interface
var Produto = /** @class */ (function () {
    function Produto(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    ;
    return Produto;
}());
;
// chamando a classe
var p = new Produto("Produto", 1);
// função implementando uma Interface
function produto(_a) {
    var nome = _a.nome, valor = _a.valor;
    nome;
    valor;
}
;
// chamando a função
produto({
    nome: "Produto",
    valor: 1
});
