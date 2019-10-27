// função anônima com tipagem de parâmetros e de retorno
const soma1 = function (x: number, y: number): number {
    return x + y;
};

// arrow function
const soma2 = (x: number, y: number): number => { return x + y };
const soma3 = (x: number, y: number): number => x + y;
const mensagem = (): void => console.log("Mensagem");
const getNome = value => value;

// default parameters para functions
const getNomeCompleto1 = (nome: string = "nome", sobrenome: string = "sobrenome"): string => `${nome} ${sobrenome}`;

// parâmetros opcionais (não obrigatórios)
const getNomeCompleto2 = (nome: string = "nome", sobrenome?: string): string => `${nome} ${sobrenome}`;