// declaração da Interface
interface IProduto {
    nome: string;
    valor: number;
};

// criando uma variável do tipo da Interface
let prod: IProduto = {
    nome: "Produto",
    valor: 1
};



// classe implementando uma Interface
class Produto implements IProduto {
    constructor(
        public nome: string,
        public valor: number
    ) { };
};

// chamando a classe
let p: Produto = new Produto("Produto", 1);



// função implementando uma Interface
function produto({ nome, valor }: IProduto) {
    nome;
    valor;
};

// chamando a função
produto(
    {
        nome: "Produto",
        valor: 1
    }
);