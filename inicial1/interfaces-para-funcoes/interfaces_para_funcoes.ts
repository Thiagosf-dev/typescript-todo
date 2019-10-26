interface IFuncao {
    (a: number, b: number): boolean;
}

let add: IFuncao = function (num1: number, num2: number): boolean {
    return true;
};

add(5, 10); // imprime: true