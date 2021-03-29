var pessoas = [
    {
        nome:'Susana',
        idade:' 78 anos',
        estadoCivil: ' solteira',
        profissão: ' cartomante.',
    
    },{
        nome:'Claudio',
        idade:' 25 anos',
        estadoCivil: ' solteiro',
        profissão: ' lenhador.',
    
    },{
        nome:'Raimunda',
        idade:' 45 anos',
        estadoCivil: ' divorciada',
        profissão: ' dançarina.',
    
    },{
        nome:'Valentina',
        idade:' 66 anos',
        estadoCivil: ' solteira',
        profissão: ' Astronauta.',
    
    },
]
var informações = document.getElementById('informações')
function user(){ 
    var nomeDoUser = prompt('Escreva seu nome:  ');
    if (nomeDoUser == ""){
        alert("Insira um nome, por favor.")
        return user()
    }else if(nomeDoUser == (Object(pessoas[0].nome))){
        informações.textContent = Object.values(pessoas[0])
    }else if(nomeDoUser == (Object(pessoas[1].nome))){
        informações.textContent = Object.values(pessoas[1])
    }else if(nomeDoUser == (Object(pessoas[2].nome))){
        informações.textContent = Object.values(pessoas[2])
    }else if(nomeDoUser == (Object(pessoas[3].nome))){
        informações.textContent = Object.values(pessoas[3])
    }else{
        alert("Não consta no banco de dados.")
        return user()
    }
}
user()