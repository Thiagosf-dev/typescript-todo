module ColorModule {
    export class Color {
        nome: string;
        codigo: string;

        getColor(): string {
            return `${this.codigo} = ${this.nome}`;
        };
    };
};