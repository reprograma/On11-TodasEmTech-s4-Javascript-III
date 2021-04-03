//crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        

        //ETAPA FULL

        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos
       
         var pessoas = [
                {
            id: 1,            
            nome: 'Ana',
            altura: 1.65,
            estadoCivil: 'Solteira'
                },

         {  id: 2,
            nome: 'Bia',
            altura: 1.68,
            estadoCivil: 'Solteira'
                 
                  },

        {    id: 3,
             nome: 'Bela',
             altura: 1.75,
             estadoCivil: 'Casada'
                   
                    },

        ];   
        function entrada()  {
        var nomes = Number (prompt("Digite um id"));
         
              if(nomes == " "){

             alert("Digite um id válido")
              return entrada()

             } else if (nomes == 1 ){
                 alert(Object.values(pessoas[0]))
             } else if (nomes == 2 ){
                        alert(Object.values(pessoas[1]))
             } else if (nomes == 3 ){
                        alert(Object.values(pessoas[2]))
             }
        }     
            
                  for(var i = 1; i <= 3; i++){
                entrada()
                
                }
     
        
         