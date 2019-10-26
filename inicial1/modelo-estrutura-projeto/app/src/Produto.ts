/// <reference path="IProduto.ts" />


module App {
    export class Produto implements IProduto {
        constructor(
            public nome: string,
            public descricao: string,
            public valor: number
        ) { };

        getNome(): string {
            return this.nome;
        };
        setNome(value: string): void {
            this.nome = value;
        };

        getDescricao(): string {
            return this.descricao;
        };
        setDescricao(value: string): void {
            this.descricao = value;
        };

        getValor(): number {
            return this.valor;
        };
        setValor(value: number): void {
            this.valor = value;
        };

        getInfo(): string {
            return `Nome: ${this.getNome()}
                Descrição: ${this.getDescricao()}
                Valor: R$${this.getValor()}
            `;
        };
    };
};