
function buscarPessoa(){
    let nome = prompt('Insira um nome: ')
    var array = [
        {
            nome: 'Isabela',
            idade: 24,
            estadoCivil: 'solteira',
        },
        {
            nome: 'Antonio',
            idade: 28,
            estadoCivil: 'casado',
        }
    ];

    let = objEncontrado = array.find(n => n.nome === nome)

    if(objEncontrado){
        alert(Object.values(objEncontrado))
    } else{
        alert("Não encontrado")
    }
        
  
}
    for (let i = 0; i < 3; i++) {
        buscarPessoa();
        
    }

