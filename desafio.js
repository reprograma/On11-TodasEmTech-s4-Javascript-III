// desafio 1
var Amanda = {
    nome: "Amanda",
    idade: 27,
    altura: 1.70,
    cor: "amarelo"
}

var Joao = {
    nome: "João",
    idade: 29,
    altura: 1.80,
    cor: "preto"
}

var Tuyla = {
    nome: "Tuyla",
    idade: 16,
    altura: 1.60,
    cor: "verde"
}

var Cesar = {
    nome: "César",
    idade: 47,
    altura: 1.60,
    cor: "marrom"
}

var Irina = {
    nome: "Irina",
    idade: 60,
    altura: 1.5,
    cor: "azul"
}

let listaNomes = [Amanda, Joao, Tuyla, Cesar, Irina]


function selecionarPessoa(){
let pessoa = prompt("Temos informações de Amanda, João, Tuyla, César e Irina. Digite o nome da pessoa que você quer recuperar os dados. **Atenção, respeitar letras maiúsculas, minúsculas e acentos.**")

if(pessoa=="Amanda"){
    alert(Object.values(listaNomes[0]))
} else if (pessoa=="João"){
    alert(Object.values(listaNomes[1]))
} else if (pessoa=="Tuyla"){
    alert(Object.values(listaNomes[2]))
} else if (pessoa=="César"){
    alert(Object.values(listaNomes[3]))
} else if (pessoa=="Irina"){
    alert(Object.values(listaNomes[4]))
} else {
    alert("Pessoa não cadastra")
    return selecionarPessoa()
}
}

selecionarPessoa()

// desafio 2 - etapa full

let repete = prompt("Agora você pode solicitar informações de até 3 pessoas. Digite de 1 a 3, o número de pessoas que você quer puxar informação")

for ( let i = 1; i <= repete; i++){
    selecionarPessoa()
}
