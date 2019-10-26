/**
 * @description Criação de uma Interface
 */
interface IPessoa {
    nome: string;
    idade: number;
}

function pessoa(value: IPessoa): void { }   // função que implementa a interface

pessoa({    // chmamando a função e passando um objeto que deve ter a assinatura da Interface (atributos)
    nome: "Nome1",
    idade: 1
});



function pessoa2(value: IPessoa): IPessoa { // função que implementa a interface e retorna um objeto do tipo Interface
    // o objeto de retorno de ter a mesma assinatura da Interface
    return {
        nome: "Nome3",
        idade: 3
    };
}

pessoa2({
    nome: "Nome2",
    idade: 2
});
// imprime: { nome: "Nome3", idade: 3 }



interface ICor {
    titulo: string;     // atributo obrigatório
    codigo?: string;    // atributo opcional
}

function color1(titulo: string, codigo?: string): ICor {
    console.log('args :', arguments);
    // a implementação ocorre quando passamos apenas os parâmetros obrigatórios
    // ou se garantirmos todos os parâmetros (obrigatórios e opcionais)
    return codigo
        ? {
            titulo: "Titulo00",
            codigo: "codigo00"
        }
        : {
            titulo: "Titulo00"
        }
}

color1("titulo01");             // imprime: { titulo: "titulo01" }
color1("titulo01", "codigo01"); // imprime: { titulo: "titulo01", codigo: "codigo01" }