//ETAPA1: Crie um objeto com 5 caracteristicas
//ETAPA2: Altere a 3ª caracteristica deste objeto
//ETAPA3: Delete a 4ª caracterisca deste objeto


let pessoa = {
    name: "Nathi",
    age: 30,
    cpf: "00000000000",
    email: "nathi.blablabla@hotmail.com",
    height: 1.72,
}

pessoa.cpf = "11111111111"; // ETAPA2: Altere a 3ª caracteristica deste objeto

delete pessoa.email; //ETAPA3: Delete a 4ª caracterisca deste objeto

console.log(Object.values(pessoa));

const { name, age, cpf } = pessoa;

console.log(name, age, cpf);
