/**
 * @description Formas de declaração de variável com tipagem
 * @author Thiago Soares Figueiredo
 * 
 */
var declaracao1: boolean;           // declaração sem inicialização
var declaracao2: boolean = true;    // declaração com inicialização

/**
 * @description Tipos de variáveis
 * @author Thiago Soares Figueiredo
 */
var number1: number = 1;        // inteiro
var number2: number = 1.1       // decimal
var number3: number = 0xf00d;   // hexadecimal
var number4: number = 0b1010;   // binário
var number5: number = 0o744;    // octal

var string1: string = "texto"   // string com aspas duplas
var string2: string = 'texto'   // string com aspas simples
var string3: string = `texto`   // string com template string

var array1: string[] = ["texto1", "texto", "texto3"];       // array de tipo definido (string)
var array1: Array<string> = ["texto1", "texto", "texto3"];  // array genérico de tipo definido (string)
var array3: number[] = [1, 2, 3];                           // array de tipo definido (number)

enum Color1 { Azul, Amarelo, Vermelho };                // enum com valores padrões (iniciando no 0 até o tamanho do enum -1)
enum Color2 { Azul = 10, Amarelo = 87, Vermelho = 0 };  // enum com valores específicos

var any1: any;  // variável sem tipagem (tem o seu tipo definido de acordo com o tipo do último valor recebido/atribuido a ela)
any1 = 1;           // recebendo o tipo number
any1 = true;        // recebendo o tipo boolean
any1 = "texto";     // recebendo o tipo string
any1 = [];          // recebendo o tipo array
any1 = {};          // recebendo o tipo objeto
any1 = undefined;   // recebendo o valor undefined
any1 = null;        // recebendo o valor null

var function1: void;    // variável (função) sem retorno