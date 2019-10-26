var Carro = /** @class */ (function () {
    function Carro(// declaração e criação de um construtor de classe .:. o construtor é uma função
    nome, cor, forca) {
        this.nome = nome;
        this.cor = cor;
        this.forca = forca;
    }
    ;
    Carro.prototype.mostrarDetalhes = function () {
        // imprime os valores das variáveis da classe criadas automaticamente,
        // que são os atributos criados na declaração do construtor,
        // que podem ser acessadas com usso da palavra reservada this
        this.nome;
        this.cor;
        this.forca;
    };
    return Carro;
}());
var Camaro = new Carro(// criando uma instância de objeto
"Camaro", "Amarelo", 150);
// imprime os valores dos atributos da classe
Camaro.mostrarDetalhes(); // acessando método do objeto
Camaro.nome = "Outro nome"; // altera o valor do atributo da classe
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
    }
    ;
    Pessoa.caracteristicas = []; // declaração e criação de um atributo estático, se comporta com uma variável global da classe
    return Pessoa;
}());
var Thiago = new Pessoa("Thiago", 34);
Thiago._nome = "Outro nome"; // não tem acesso aos atributos privados da classe (não realiza alteração diretamento no variável)
Pessoa.caracteristicas.push("Carc1"); // tem acesso a atributos estáticos de uma classe chamando diretamente a classe e não o objeto
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    ;
    // criação dos métodos GETTERS e SETTERS doas atributos privados
    Pessoa2.prototype.getNome = function () {
        return this._nome;
    };
    ;
    Pessoa2.prototype.setNome = function (value) {
        this._nome = value;
    };
    Pessoa2.prototype.getIdade = function () {
        return this._idade;
    };
    ;
    Pessoa2.prototype.setIdade = function (value) {
        this._idade = value;
    };
    Pessoa2.caracteristicas = []; // declaração e criação de um atributo estático, se comporta com uma variável global da classe
    return Pessoa2;
}());
var Nome = new Pessoa2("Nome", 0);
Nome.getNome(); // acessando o método getter da classe
Nome.setNome("Novo nome"); // acessando o método setter da classe
