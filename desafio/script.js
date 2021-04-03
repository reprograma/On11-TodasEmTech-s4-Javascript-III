const btnVerificar = document.querySelector('input#btnVerificar');
btnVerificar.addEventListener('click', verificar);

const selNomesCadastrados = document.querySelector('select#selNomesCadastrados');
var res = document.querySelector('div#res');


let pessoa = [
    {
        name: 'Nathi',
        age: 30,
        cpf: "00000000000",
        email: "nathi@nathi.com",
        gender: "F"
    },
    {
        name: 'Barbara',
        age: 29,
        cpf: "11111111111",
        email: "barbara@barbara.com",
        gender: "F"
    },
    {
        name: 'Fernanda',
        age: 25,
        cpf: "22222222222",
        email: "fernanda@fernanda.com",
        gender: "F"
    },
    {
        name: 'Alessandra',
        age: 31,
        cpf: "33333333333",
        email: "alessandra@alessandra.com",
        gender: "F"
    },
    {
        name: 'Daniel',
        age: 27,
        cpf: "44444444444",
        email: "daniel@daniel.com",
        gender: "M"
    }
]

for (let c = 0; c < pessoa.length; c++) {
    let item = document.createElement('option');
    item.text = `Nome ${c+1}: ${pessoa[c].name}`;
    item.value = `${c}`
    selNomesCadastrados.appendChild(item);

}


export default function verificar() {
    

    res.innerHTML = "";

    const selected = document.querySelectorAll('select#selNomesCadastrados option:checked');
    const valores = Array.from(selected).map(val => val.value);
    

    //let reduce = valores.reduce((acc,cur) => acc + cur);

    for (let index = 0; index < valores.length; index++) {
        res.innerHTML += `<p><strong>Nome:</strong> ${pessoa[valores[index]].name}</br>
        <strong>Idade:</strong> ${pessoa[valores[index]].age}</br>
        <strong>CPF:</strong> ${pessoa[valores[index]].cpf}</br>
        <strong>e-mail:</strong> ${pessoa[valores[index]].email}</br>
        <strong>Sexo:</strong> ${pessoa[valores[index]].gender}</br>
        </p>
        -------------------------------------------
        `
    }

}
