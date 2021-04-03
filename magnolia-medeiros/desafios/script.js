var cantores = [
    {
        nome: 'Faith Hill',
        idade: 56,
        altura: 1.77,
        pais: 'Mississipi',
        status: 'Casada'
    },
    {
        nome: 'Shania Twain',
        idade: 55,
        altura: 1.65,
        pais: 'Canada',
        status: 'Casada'
    },
    {
        nome: 'Alan Jackson',
        idade: 62,
        altura: 1.80,
        pais: 'Georgia',
        status: 'Casado'
    },
    {
        nome: 'Tim McGraw',
        idade: 53,
        altura: 1.85,
        pais: 'Luisiana',
        status: 'Casado'
    },
    {
        nome: 'Garth Brooks',
        idade: 59,
        altura: 1.85,
        pais: 'Oklahoma',
        status: 'Casado'
    }
]

for (let i = 0; i < cantores.length; i++) {

    const element = [cantores[i].nome + ', ' + cantores[i].idade + ' anos, ' + cantores[i].pais + '</br>']
    document.write(Object.values(element))
}

function mostrarCantor() {
    var info = prompt('Digite o nome do cantor(a) para ter mais informações')

    if (info == 'Faith Hill') {
        return alert(Object.values(cantores[0]))
    } else if (info == 'Shania Twain') {
        return alert(Object.values(cantores[1]))
    } else if (info == 'Alan Jackson') {
        alert(Object.values(cantores[2]))
    } else if (info == 'Tim McGraw') {
        alert(Object.values(cantores[3]))
    } else if (info == 'Garth Brooks') {
        alert(Object.values(cantores[4]))
    } else {
        alert('Dados não encontrados!')
        return mostrarCantor(cantores)
    }
}
mostrarCantor()