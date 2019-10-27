let nome: any = "Nome";
(<string>nome).length;      // assertion de tipo
(nome as string).length;    // conversão de tipo



let obj: object = {
    nome: "Nome"
};
(<any>obj).texto = "Texto";     // assertion de tipo
(obj as any).texto = "Texto";   // conversão de tipo



let num: number = 1;
let str: string = num + ""; // conversão implícita de number para string

let str2: string = "123";
let num2: number = +str;    // conversão implícita de string para number