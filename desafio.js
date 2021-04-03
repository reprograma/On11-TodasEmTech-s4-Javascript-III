//crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        var cadastro = [
                  
          {
            nome: 'Raphaella',
            idade: 33 ,
            profissão: 'Estudante'},
      
           { 
             nome: 'Maria',
             idade: 35,
             profissão: 'Motorista'},
      
           { 
             nome: 'Lurdes',
             idade: 41,
             profissão: 'Motorista'},
      
           { 
             nome: 'Lucas',
             idade: 26,
             profissão: 'Frentista'},
      
           { 
             nome: 'João',
             idade: 45,
             profissão: 'Pedreiro'},
           ]
      
      
      function  selecionarPessoa ( ) {
      let  pessoa  =  prompt ( " Digite o nome da pessoa" )
      
      if ( pessoa == "Raphaella" ) {
          alert ( Object . values ( cadastro [ 0 ] ) )
      }  else  if  ( pessoa == "Maria" ) {
          alert ( Object . values ( cadastro [ 1 ] ) )
      }  else  if  ( pessoa == "Lurdes" ) {
          alert ( Object . values ( cadastro [ 2 ] ) )
      }  else  if  ( pessoa == "Lucas" ) {
          alert ( Object . values ( cadastro [ 3 ] ) )
      }  else  if  ( pessoa == "João" ) {
          alert ( Object . values ( cadastro [ 4 ] ) )
      }  else  {
          alert ( "Pessoa não cadastrada" )

          return selecionarPessoa (cadastro);
      }
      }
      
          selecionarPessoa ( )

          
      
        

        
        //ETAPA FULL

        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos