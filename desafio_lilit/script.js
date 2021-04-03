//crie um programa em que o usuário insira um nome e retorne para ele as propriedades deste nome inserido
        // O programa  pode ter um array com até 5 elementos (cada elemento pode ter até 5 propriedades).
        

        //ETAPA FULL
        
        //Adicione um repetidor para que o usuário tenha as informação de até 3 elementos
        
let btnSubmit = document.getElementById('btn');
let returnData = document.getElementById('data');

let registers = [
        {
          nome: 'Jhonny',
          idade: 23,
          signo: 'Escorpião',
          cidade: 'Recife',
          gênero: 'Homem cis'
        },
        {
          nome: 'Beatriz',
          idade: 26,
          signo: 'Libra',
          cidade: 'Recife',
          gênero: 'Mulher cis'
        },
        {
          nome: 'Paulet',
          idade: 26,
          signo: 'Escorpião',
          cidade: 'São Paulo',
          gênero: 'Travesti'
        },
        {
          nome: 'Ige',
          idade: 29,
          signo: 'Câncer',
          cidade: 'Recife',
          gênero: 'Não-binárie'
        },
        {
          nome: 'Suênia',
          idade: 55,
          signo: 'Virgem',
          cidade: 'Campina Grande',
          gênero: 'Mulher cis'
        }
      ]

user.onkeypress = e => {
  if (e.keyCode == 13) {
    showUserData();
    e.preventDefault();
  }
}

btnSubmit.onclick = e => {
  showUserData();
  e.preventDefault();
}

showUserData = () => {

  let searchName = document.getElementById('user').value;
  
  const returnSearch = registers.find(i => i.nome == searchName);

  if(returnSearch == undefined) {
    returnData.textContent = 'User Não encontrade'
  } else {
    let user = (Object.values(returnSearch)).join(' - ');
    returnData.textContent = user
    console.table(returnSearch)
  }
}


//Eu não fiz um repetidor pra pedir os dados 3 vezes pq como fiz um input no html, o usuário já pode fazer quantas pesquisas quiser, conclui que não seria necessário;
//A saída dos dados ficou bem simples, pensei em retornar os dados numa tabela n só os valores como as chaves, mas estou com uma semana um pouco cheia e me ative ao solicitado;