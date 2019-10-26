/**
 * @author Thiago Soares Figueiredo
 * @description Classe que implementa uma Interface que extende outras Interfaces
 * @description Deve resolver a assinatura da Interface que ela implementa diretamente
 */
var ClassMain = /** @class */ (function () {
    function ClassMain(isGeral, nome, idade) {
        this.isGeral = isGeral;
        this.nome = nome;
        this.idade = idade;
    }
    ;
    ClassMain.prototype.getNome = function () {
        return this.nome;
    };
    ;
    ClassMain.prototype.getIdade = function (i) {
        this.idade = i;
        return this.idade;
    };
    ;
    ClassMain.prototype.getIsGeral = function () {
        return this.isGeral;
    };
    ;
    return ClassMain;
}());
var ClassMainTest = new ClassMain(true, "", 0);
ClassMainTest.getNome();
ClassMainTest.getIdade(1);
ClassMainTest.getIsGeral();
