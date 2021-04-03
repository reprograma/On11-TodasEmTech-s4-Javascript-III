// objeto - utilizado para informar caracteristica e atribuição. Colocar virgula para colocar novas propriedades

//Sintaxe OBJETO

var pessoa = {
    nome: "Amanda",
    sobrenome: "Rosa",
    roupa: "azul",
    altura: 1.70.toFixed(2),
    idade: 27
}


alert(Object.values(pessoa))


pessoa.roupa = "rosa" //alterado propriade de objeto
alert(pessoa.roupa)
alert(Object.values(pessoa))


delete pessoa.altura // deletar propriedade
alert(Object.values(pessoa)) // alerta tudo do objeto


pessoa.cor = "amarelo" // adicionar propriadade
document.write(Object.values(pessoa)) // imprime tudo do objeto



