let arrayTeste = [1, 2, 6, 8, "nathi", "teste"];

console.log(arrayTeste);
console.log(`O Quinto elemento do array é: ${arrayTeste[4]}`);
console.log("----------------------------------------------");
console.log(`O Tamanho do ArrayTeste é: ${arrayTeste.length}`);


arrayTeste = [...arrayTeste, "banana,", "maça"]; // adicionando banana e maçã ao array;
console.log(`Agora o Tamanho do ArrayTeste é: ${arrayTeste.length}`);

arrayTeste.shift() // Removando o primeiro item do array.
console.log(`Agora o Tamanho do ArrayTeste é: ${arrayTeste.length}`);

arrayTeste.splice(2, 2); // apagando os dois ultimos itens do array
console.log(`Agora o Tamanho do ArrayTeste é: ${arrayTeste.length}`);

arrayTeste.pop(); // apagando o ultimo item do array. // [].pop apaga o ultimo item.
console.log(`Agora o Tamanho do ArrayTeste é: ${arrayTeste.length}`);


console.log("----------------------------------------------");

console.log("Incluindo Mick ao primeiro item do Array por Mick");

arrayTeste.unshift("Mick");


console.log(`O Tamanho do ArrayTeste é: ${arrayTeste.length}`);
console.log(arrayTeste);
