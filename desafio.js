 //crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        

        //ETAPA FULL

        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos

    let id01 ={
        
            nome: "Crystiane",
            idade: 36,
            cidade: "Brasília",
            status: "Solteira",
        }
    let id02 ={
            nome: "Carlos",
            idade: 25,
            cidade: "Belo Horizonte",
            status: "solteiro"
        }
    let id03 ={
            nome:"João",
            idade:24,
            cidade:"Brasília",
            status:"casado",
        }
    let id04 ={
        
            nome:"Ana Julia",
            idade: 36,
            cidade: "Curitiba",
            status:"Casada",
        };


let listId = [id01, id02, id03, id04]
function cadastroId(){
    let login = prompt("Logins cadastrados de Ad01 até Ad04")

if(login =="ad01"){
    document.write(Object.values(listId[0]))
} else if (login=="ad02"){
    document.write(Object.values(listId[1]))
} else if (login=="ad03"){
    document.write(Object.values(listId[2]))
} else if (login=="ad04"){
    document.write(Object.values(listId[3]))
}
else {
    document.write("login não cadastrado")
    return cadastroId()
};

}

cadastroId()
let loginKeys = prompt("Informa o id para obter a informação")

for (let i = 1; i <= loginKeys; i++){
    cadastroId()
}