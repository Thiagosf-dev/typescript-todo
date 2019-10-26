class Carro {       // declaração de criação de uma classe
    constructor(    // declaração e criação de um construtor de classe .:. o construtor é uma função
        public nome: string,
        public cor: string,
        public forca: number
    ) { };

    mostrarDetalhes(): void {  // declaração e criação de um método
        // imprime os valores das variáveis da classe criadas automaticamente,
        // que são os atributos criados na declaração do construtor,
        // que podem ser acessadas com usso da palavra reservada this
        this.nome;
        this.cor;
        this.forca;
    }
}

let Camaro: Carro = new Carro(  // criando uma instância de objeto
    "Camaro",
    "Amarelo",
    150
);

// imprime os valores dos atributos da classe
Camaro.mostrarDetalhes();   // acessando método do objeto
Camaro.nome = "Outro nome"; // altera o valor do atributo da classe



class Pessoa {
    // declaração de atributos privados
    private _nome: string;
    private _idade: number;
    public static caracteristicas: Array<string> = []; // declaração e criação de um atributo estático, se comporta com uma variável global da classe

    constructor(nome: string, idade: number) { };
}

let Thiago: Pessoa = new Pessoa("Thiago", 34);
Thiago._nome = "Outro nome";             // não tem acesso aos atributos privados da classe (não realiza alteração diretamento no variável)
Pessoa.caracteristicas.push("Carc1");   // tem acesso a atributos estáticos de uma classe chamando diretamente a classe e não o objeto

class Pessoa2 {
    // declaração de atributos privados
    private _nome: string;
    private _idade: number;
    public static caracteristicas: Array<string> = []; // declaração e criação de um atributo estático, se comporta com uma variável global da classe

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    };

    // criação dos métodos GETTERS e SETTERS doas atributos privados
    getNome(): string {
        return this._nome;
    };

    setNome(value: string) {
        this._nome = value;
    }

    getIdade(): number {
        return this._idade;
    };

    setIdade(value: number) {
        this._idade = value;
    }
}

let Nome: Pessoa2 = new Pessoa2("Nome", 0);
Nome.getNome();             // acessando o método getter da classe
Nome.setNome("Novo nome");  // acessando o método setter da classe