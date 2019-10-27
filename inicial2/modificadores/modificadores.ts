// declaração da classe
class Animal {
    // atributos
    // public nome: string;     // sem parâmetros no cosntrutor
    private _raça: string;
    public static count1: number = 0;
    protected static count2: number = 0;
    private static count3: number = 0;

    // construtor
    // caso seja assinado os parâmetros e seu nível de acesso, o atributo é criado implícitamente
    constructor(
        public nome: string
    ) {
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

    // métodos da classe
    public metodoPublic(): void { };                        // acesso para qualquer instância

    protected metodoProtected(): void { };                  // quem herda tem acesso

    private metodoPrivado(): void { };                      // acesso somente na classe

    public static metodoEstaticoPublic(): void { };         // acesso sem instância

    protected static metodoEstaticoProtected(): void { };   // acesso sem instância somente de quem herda

    private static metodoEstaticoPrivate(): void { };       // acesso sem instância somente da classe
};