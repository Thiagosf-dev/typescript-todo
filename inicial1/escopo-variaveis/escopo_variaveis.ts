var car: string = "Ferrari"; // imprime: car = Ferrari

/**
 * @description Função recebe um parametro e o armazena na variável car
 * @description Nesse momento a variável car passa a ter o valor do parametro por estar no escopo da função
 * @param value
 * @returns car 
 */
function getCar(value: string): string {
    var car: string = value;
    return car; // imprime: car = value
}

// imprime: car = Ferrari

/**
 * @description Função que retorna o valor da variável car
 * @description Retorna o valor de car sendo Ferrari, o atribuído na declaração da variável, escopo global do arquivo
 * @returns car
 */
function testeEscopo() {
    return car; // imprime: car = Ferrari
}

function testA(): number {
    var a = 1;
    a = 2;

    var b = testB(); // retorna o valor de a = 2

    a = 3;

    return b; // imprime: b = 2

    function testB() {
        return a;
    }
}

/**
 * @description Variáveis criadas com o let não interferem em variáveis de fora do seu escopo
 * @param value 
 */
function f(value: boolean): number {
    let a: number = 100; // declaração de variável de escopo (let)

    if (value) {
        let b: number = a + 1; // neste escopo (do if) se encherga a variável a
        // imprime: b
        // imprime: a
    }

    // imprime: a
    // não imprime: b

    return b; // erro de compilação, este escopo (da função) não encherga a variável b criada em outro escopo (do if)
}

function g(condicao: boolean, x: number): number {
    if (condicao) {
        let x: number = 100;

        return x; // imprime: x = 100 (fixo)
    }

    return x; // imprime: x = x (parametro)
}