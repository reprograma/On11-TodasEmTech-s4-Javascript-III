  //crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
  // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).

  var inInfo =[

    { 
      id: 87,
      nome:"Debora",
      sobrenome: "Freitas",
      idade:"27",
      cor: "preto",
      altura: "1,69"
    },
     
    { 
      id: 90,
      nome:"Anna",
      sobrenome:"Oliveira",
      idade:"34",
      cor: "amarelo",
      altura: "1,65"
    },
    
    { 
      id:72,
      nome:"Lili",
      sobrenome: "T",
      idade: "32",
      cor: 'preto',
      altura:"1,72",
    },
    
    { 
      id:69,
      nome: "Agnes",
      sobrenome: "Galvão",
      idade: "28",
      cor: "roxo",
      altura:"1,60"
    },
    
    {
      id:44,
      nome:"Beatriz",
      sobrenome:"Ramerindo",
      idade: "24",
      cor: "branco",
      altura: "1,70"
    }]
    
 
  
  function intro(){
    var info = prompt('Digite o cód para obter a descrição')
   
    if(!info){
        alert("Desculpe, não encontrado");
        intro();
    }else{
        alert(Object.values(inInfo.find(element => element.id == info)));
    } 
    };
    intro();

    for(var i = 0; i <= inInfo.length; i++){
    alert(inInfo[i].nome);
    alert(inInfo[i].sobrenome);
    alert(inInfo[i].idade);
    alert(inInfo[i].cor);
    alert(inInfo[i].altura)
    }

   
