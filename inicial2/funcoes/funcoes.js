// função anônima com tipagem de parâmetros e de retorno
var soma1 = function (x, y) {
    return x + y;
};
// arrow function
var soma2 = function (x, y) { return x + y; };
var soma3 = function (x, y) { return x + y; };
var mensagem = function () { return console.log("Mensagem"); };
var getNome = function (value) { return value; };
// default parameters para functions
var getNomeCompleto1 = function (nome, sobrenome) {
    if (nome === void 0) { nome = "nome"; }
    if (sobrenome === void 0) { sobrenome = "sobrenome"; }
    return nome + " " + sobrenome;
};
// parâmetros opcionais (não obrigatórios)
var getNomeCompleto2 = function (nome, sobrenome) {
    if (nome === void 0) { nome = "nome"; }
    return nome + " " + sobrenome;
};
