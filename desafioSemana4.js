/* 
    crie um programa em que o usuário insira um nome e retorne para ele as 
    propriedades deste nome inserido.
    O programa  pode ter um array com até 5 elementos (cada elemento pode ter 
    até 5 propriedades).
    ETAPA FULL
    Adicione um repetidor para que o usuário tenha as informação de até 3 elementos
*/

var maria = {
    nome: 'Maria',
    departamento: 'DFCH',
    colegiado: 'Colégiado de História',
    disciplina: 'Introdução aos Estudos Históricos'
}
let emanuelle = {
    nome: 'Emanuelle',
    departamento: 'DCE',
    colegiado: 'Colegiado de Matemática',
    disciplina: 'Calculo Diferrêncial e Integral II'
};
let joana = {
    nome: 'Joana',
    departamento: 'DCE',
    colegiado: 'Colegiado de Computação',
    disciplina: 'Introdução a Lógica de Programação I'
};
let carla = {
    nome: 'Carla',
    departamento: 'DCE',
    colegiado: 'Colégiado de Ciênca da Computação',
    disciplina: 'Estrutura de Dados II'
}
let luana = {
    nome: 'Luana',
    departamento: 'DCE',
    colegiado: 'Colégiado de Ciência da Computação',
    disciplina: 'Estrutura de Dados I'
}
let listaProfessor = [maria, emanuelle, joana, carla, luana];

function buscarProfessor() {
    let cont = 1;
    while (cont <= 3) {
        let professor = prompt("Insira o nome do professor que gostaria de pesquisar");
        if (professor == listaProfessor[0].nome) {
            alert(Object.values(listaProfessor[0]));
        } else if (professor == listaProfessor[1].nome) {
            alert(Object.values(listaProfessor[1]));
        } else if (professor == listaProfessor[2].nome) {
            alert(Object.values(listaProfessor[2]));
        } else if (professor == listaProfessor[3].nome) {
            alert(Object.values(listaProfessor[3]));
        } else if (professor == listaProfessor[4].nome) {
            alert(Object.values(listaProfessor[4]));
        } else {
            alert("O professor não foi encontrado")
            return buscarProfessor();
        }
        cont++;
    }
}
buscarProfessor();