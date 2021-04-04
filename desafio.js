    //crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
    // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
    

    //ETAPA FULL

    //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos

        var familia = [
          {
              cod: 1,
              nome: 'Conceição',
              cargo: 'Mãe',
              qualidade: 'Amor e Proteção',
              defeito: 'Super Proteção'
          },

          {
              cod: 2,
              nome: 'Valnei',
              cargo: 'Pai',
              qualidade: 'Batalhador',
              defeito: 'Inconsequencia'
          },

          {
              cod: 3,
              nome: 'Viviane',
              cargo: 'Irmã',
              qualidade: 'Estou tentando descobrir',
              defeito: 'Trambiqueira'
          },

          {
              cod: 4,
              nome: 'Thiago',
              cargo: 'Marido',
              qualidade: 'Prestativo',
              defeito: 'Desligado'
          },

          {
              cod: 5,
              nome: 'Pipoca',
              cargo: 'Filha Gata',
              qualidade: 'Divertida',
              defeito: 'Mordona'
          }
      ];

  function dado(){
      var nomes = Number(prompt("Digite um número de 1 a 5:"));

          if(nomes == " " || nomes > 5){
              alert("Digite um código válido!");
              return dado();

          }else if(nomes == 1){
              alert(Object.values(familia[0]));

          }else if(nomes == 2){
              alert(Object.values(familia[1]));

          }else if(nomes == 3){
              alert(Object.values(familia[2]));

          }else if(nomes == 4){
              alert(Object.values(familia[3]));
          
          }else if(nomes == 5){
          alert(Object.values(familia[4]));
      }
  }        

  for(var i = 1; i <= 5; i++){
      dado();
  }