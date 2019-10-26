interface IInter1 {
    nome: string;
    getNome(): string;
}

interface IInter2 {
    idade: number;
    getIdade(i: number): number;
}

/**
 * @author Thiago Soares Figueiredo
 * @description Declarando e implementando Interfaces com o uso da palavra chave extends
 * @description É possível implementar uma ou mais Interfaces, seperando por vírgula cada uma
 */
interface IInter extends IInter1, IInter2 {
    isGeral: boolean;
}

/**
 * @author Thiago Soares Figueiredo
 * @description Classe que implementa uma Interface que extende outras Interfaces
 * @description Deve resolver a assinatura da Interface que ela implementa diretamente
 */
class ClassMain implements IInter {
    constructor(public isGeral: boolean, public nome: string, public idade: number) { };

    getNome(): string {
        return this.nome;
    };

    getIdade(i: number): number {
        this.idade = i;
        return this.idade;
    };

    getIsGeral(): boolean {
        return this.isGeral;
    };
}

var ClassMainTest: ClassMain = new ClassMain(true, "", 0);
ClassMainTest.getNome();
ClassMainTest.getIdade(1);
ClassMainTest.getIsGeral();