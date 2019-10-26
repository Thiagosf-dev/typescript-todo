module App {
    export interface ICar {
        nome: string;
    }
};

module App {
    class Carro implements ICar {
        nome: string;
        cor: string;
    }

    let c: Carro = new Carro();
    c.nome = "Carro";
    c.cor = "Branco";
};