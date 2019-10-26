///<reference path="ICarro.ts"/>

/**
 * @author Thiago Soares
 * @description Referenciando (importando) arquivo com o uso do reference
 */
class Carro implements ICarro {
    constructor(
        public nome: string,
        public ano: number,
        public isAutomatico: boolean
    ) { };

    getInfo(): object {
        return {
            nome: this.nome,
            ano: this.ano,
            automatico: this.isAutomatico
        }
    };
}