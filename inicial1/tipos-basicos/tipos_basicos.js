/**
 * @description Formas de declaração de variável com tipagem
 * @author Thiago Soares Figueiredo
 *
 */
var declaracao1; // declaração sem inicialização
var declaracao2 = true; // declaração com inicialização
/**
 * @description Tipos de variáveis
 * @author Thiago Soares Figueiredo
 */
var number1 = 1; // inteiro
var number2 = 1.1; // decimal
var number3 = 0xf00d; // hexadecimal
var number4 = 10; // binário
var number5 = 484; // octal
var string1 = "texto"; // string com aspas duplas
var string2 = 'texto'; // string com aspas simples
var string3 = "texto"; // string com template string
var array1 = ["texto1", "texto", "texto3"]; // array de tipo definido (string)
var array1 = ["texto1", "texto", "texto3"]; // array genérico de tipo definido (string)
var array3 = [1, 2, 3]; // array de tipo definido (number)
var Color1;
(function (Color1) {
    Color1[Color1["Azul"] = 0] = "Azul";
    Color1[Color1["Amarelo"] = 1] = "Amarelo";
    Color1[Color1["Vermelho"] = 2] = "Vermelho";
})(Color1 || (Color1 = {}));
; // enum com valores padrões (iniciando no 0 até o tamanho do enum -1)
var Color2;
(function (Color2) {
    Color2[Color2["Azul"] = 10] = "Azul";
    Color2[Color2["Amarelo"] = 87] = "Amarelo";
    Color2[Color2["Vermelho"] = 0] = "Vermelho";
})(Color2 || (Color2 = {}));
; // enum com valores específicos
var any1; // variável sem tipagem (tem o seu tipo definido de acordo com o tipo do último valor recebido/atribuido a ela)
any1 = 1; // recebendo o tipo number
any1 = true; // recebendo o tipo boolean
any1 = "texto"; // recebendo o tipo string
any1 = []; // recebendo o tipo array
any1 = {}; // recebendo o tipo objeto
any1 = undefined; // recebendo o valor undefined
any1 = null; // recebendo o valor null
var function1; // variável (função) sem retorno
