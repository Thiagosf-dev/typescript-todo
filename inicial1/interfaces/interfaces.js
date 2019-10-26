function pessoa(value) { } // função que implementa a interface
pessoa({
    nome: "Nome1",
    idade: 1
});
function pessoa2(value) {
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
function color1(titulo, codigo) {
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
        };
}
color1("titulo01"); // imprime: { titulo: "titulo01" }
color1("titulo01", "codigo01"); // imprime: { titulo: "titulo01", codigo: "codigo01" }
