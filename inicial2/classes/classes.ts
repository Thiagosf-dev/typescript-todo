// declaração da classe
class Animal {
    // atributos
    // public nome: string;     // sem parâmetros no cosntrutor
    private _raça: string;

    // construtor
    // caso seja assinado os parâmetros e seu nível de acesso, o atributo é criado implícitamente
    constructor(public nome: string) {
        // this.nome = nome;    // sem parâmetros no cosntrutor
    };

    // getters
    getRaca(): string {
        return this._raça;
    };

    // setters
    setRaca(raca: string): void {
        this._raça = raca;
    };
};