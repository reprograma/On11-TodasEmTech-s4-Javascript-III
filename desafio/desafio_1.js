/*crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido. O programa
pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades). */

let infoCientistas = [

    { nome: 'Albert Einstein',
      profissao: 'Físico',
      contribuicao: 'Efeito Fotoelétrico'
    },

    { nome: 'Marie Curie',
      profissao: 'Física-Química',
      contribuicao: 'Desenvolvimento da Teoria da Radioatividade',
      
    },

    { nome: 'Lise Meitner',
      profissao: 'Física',
      contribuicao: 'Fissão nuclear',
      
    },

    { nome: 'Stephen Hawking',
      profissao: 'Físico Teórico',
      contribuicao: 'Teoremas de singularidade Penrose-Hawking',
    },

    { nome: 'Richard Feynman',
      profissão: 'Físico',
      descoberta: 'Eletrodinâmica quântica',
    },
]


function  selecionarCientista ( ) {
let  cientista = prompt ( 'Digite o nome do cientista')

if ( cientista == 'Albert Einstein') {
    alert (Object.values (infoCientistas[0]))
    }  else  if  (cientista == 'Marie Curie') {
        alert ( Object.values (infoCientistas[1]))
    }  else  if  (cientista == 'Lise Meitner') {
        alert ( Object.values (infoCientistas [2]))
    }  else  if  (cientista== 'Stephen Hawking' ) {
        alert ( Object.values(infoCientistas[3]))
    }  else  if  ( cientista == 'Richard Feynman') {
        alert ( Object.values (infoCientistas[4]))
    }  else  {
        alert ('Cientista não cadastrado')

        return selecionarCientista (infoCientistas);
    }
}

selecionarCientista ( )

//dicione um repetidor para que o usuário tenha as informação de até 3 elementos

let repeat = prompt('Você pode obter informações de até 3 cientistas. Digite a quantidade de cientistas que você quer conhecer.');

for ( let i = 1; i <= repeat; i++){
    selecionarCientista()
}