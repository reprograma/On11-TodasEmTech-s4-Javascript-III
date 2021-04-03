//ETAPA1: Crie um objeto com 5 caracteristicas
//ETAPA2: Altere a 3ª caracteristica deste objeto
//ETAPA3: Delete a 4ª caracterisca deste objeto

var pessoa = { 
            nome: 'Raphaella',
            altura: 1.67 .toFixed (2),
            corOlhos: "Castanhos",
            peso: 77,
            musica: "Rock",
        }

        pessoa.nome = "Joana"
        delete pessoa.peso
        document.write((Object.values(usuario)))
