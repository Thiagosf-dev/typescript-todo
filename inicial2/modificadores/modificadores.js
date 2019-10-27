// declaração da classe
var Animal = /** @class */ (function () {
    // construtor
    // caso seja assinado os parâmetros e seu nível de acesso, o atributo é criado implícitamente
    function Animal(nome) {
        this.nome = nome;
        // this.nome = nome;    // sem parâmetros no cosntrutor
    }
    ;
    // getters
    Animal.prototype.getRaca = function () {
        return this._raça;
    };
    ;
    // setters
    Animal.prototype.setRaca = function (raca) {
        this._raça = raca;
    };
    ;
    // métodos da classe
    Animal.prototype.metodoPublic = function () { };
    ; // acesso para qualquer instância
    Animal.prototype.metodoProtected = function () { };
    ; // quem herda tem acesso
    Animal.prototype.metodoPrivado = function () { };
    ; // acesso somente na classe
    Animal.metodoEstaticoPublic = function () { };
    ; // acesso sem instância
    Animal.metodoEstaticoProtected = function () { };
    ; // acesso sem instância somente de quem herda
    Animal.metodoEstaticoPrivate = function () { };
    ; // acesso sem instância somente da classe
    Animal.count1 = 0;
    Animal.count2 = 0;
    Animal.count3 = 0;
    return Animal;
}());
;
