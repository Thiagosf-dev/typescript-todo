interface IClasse1 {
    texto: string;              // atributo da Interface
    contadorTexto(): number;    // função da Interface
}

/**
 * Declarando uma classe que implementa uma Interface
 */
class Classe1 implements IClasse1 {
    constructor(public texto: string) { };

    contadorTexto(): number {
        return this.texto.length;
    }
}

let c1: Classe1 = new Classe1("Texto"); // imprime: { texto: Texto }

interface IImprimir {
    imprimir(value: string): void;
}

class Classe2 implements IClasse1, IImprimir {  // implementação de múltiplas Interfaces
    constructor(public texto: string) { };

    contadorTexto(): number {
        return this.texto.length;
    }

    imprimir(value: string): void {
        let v = value;
    }
}

let c2: Classe2 = new Classe2("Textos");    // imprime: { texto: Texto2 }
c2.imprimir("Texto2");                      // atribui a variável o valor passado como parâmetro