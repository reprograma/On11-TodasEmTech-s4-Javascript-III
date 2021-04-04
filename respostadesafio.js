        //crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        

        //ETAPA FULL

        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos

var candidate1 = {
   número: "44",
   nome: " Karlla Nascimento",
   idade: " 28 anos",
   ocupação: " Jornalista",
   livro: " Vivendo de Amor",
   comida: " Sushi.",
}

var candidate2 = {
   número: 50,
   nome: " Guilherme Boulos",
   idade: " 38 anos",
   ocupação: " Professor",
   livro: " De que lado você está?",
   comida: " Boulos de chocolate", 
}

var candidate3 = {
   número: 13,
   nome: " Lula",
   idade: " 75 anos",
   ocupação: " Presidente",
   livro: " A verdade vencerá",
   comida: " Pão com mortadela",
}

var candidate4 = {
   numero: 14,
   nome: " Dilma Roussef",
   idade: " 73 anos",
   ocupação: " Ex-presidenta",
   livro: " Roussef",
   comida: " Macarrão",
}

var candidate5 = {
   número: 69,
   nome: " Rihanna",
   idade: " 73 anos",
   ocupação: " Ser rica",
   livro: " Mate um homem",
   comida: " Maçonha",
}

var escolhas = [candidate1, candidate2, candidate3, candidate4, candidate5];


function escolha(){
   var suaEscolha = prompt("Entre os números:\n 44; \n 50; \n 13; \n 14; \n 69.\n Digite qual a sua escolha muito difícil:")
   if (suaEscolha == 44) {
      alert(Object.values(escolhas[0]))
   }else if (suaEscolha == 50){
      alert(Object.values(escolhas[1]))
   }else if (suaEscolha == 13){
      alert(Object.values(escolhas[2]))
   }else if (suaEscolha == 14){
      alert(Object.values(escolhas[3]))
   }else if (suaEscolha == 69){
      alert(Object.values(escolhas[4]))
   } else {
      alert("Nada de votar nulo, meu parceiro! Volte e escolha um candidate.")
   }
   return escolha
}
escolha()

for (i = 0; i >3; i++){
   
}