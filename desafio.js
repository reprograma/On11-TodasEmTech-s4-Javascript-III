        //crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        

        //ETAPA FULL

        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos

    // resolução do desafio


    const resultadoTela = document.querySelector("#resultado");
    const usuarioEnt = document.querySelector("#usuario")
    var usuariosLista = [
            {
                usuario : "littlejane",
                nome : "Beatriz",
                idade : 23,
                estadoCivil : "solteira",
                cidade: "Niteroi",
                estado : "Rio de Janeiro",
            },
            {
                usuario : "pequenanami",
                nome : "Leticia",
                idade : 19,
                estadoCivil : "solteira",
                cidade: "Ribeirão Preto",
                estado : "São Paulo",
        },
            {
                usuario : "reidospiratas",
                nome : "Luffy",
                idade : 19,
                estadoCivil : "solteiro",
                cidade: "Foosha",
                estado : "Ilha Dawn",
        }
    ]


// função para imprimir o resultado no html
function imprimir(obj) {
   p = "";
   let out = ["Usuario", "Nome", "Idade", "Estado Civil", "Cidade", "Estado"] 

   //   for improvisado    for (contador, outFinal, contador) 
   let outInc = 1;
   let contador = 0;
   let outFinal  = 3;
   for (var i in obj) { 
            if (contador < outInc) {
                p = "";
            }
                else if (contador <= outFinal) {
                    p = p + out[contador] + " : " + obj[i] + "<br>";
                }
                    else {
                        break;
                    } 
        contador++;
   }
   return p;
}


// função para percorrer o array e localizar o usuario
function buscaArray(usuarioBusca) {
    for (var i = 0 ; i < usuariosLista.length; i++) {
        if (usuariosLista[i].usuario == usuarioBusca) {
            return usuariosLista[i];
        }
    }
    return false // caso não encontre resultado
}


// função matriz que faz a verificação dos dados e o imprime
function pesquisar() {
    let pesquisaOut = buscaArray(usuarioEnt.value.toLowerCase());  
        if (usuarioEnt.value == "") {
            alert('preenchimento obrigatório');
        }
            else if (!pesquisaOut) {
                resultadoTela.textContent = `${usuarioEnt.value} não encontrado! `
            }   
                else {
                    resultadoTela.innerHTML =  imprimir(pesquisaOut); //  ou Object.values(pesquisaOut);    
                    
                }
}

