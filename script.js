// Criando e exibindo array no console :

let profissão = ['médico', 'arquiteto', 'engenheiro', 'developer', 'professor'];
console.log(profissão);

// Adicionando um item no início da lista :

profissão.unshift('pintor');
console.log(profissão);

// Removendo o item do final da lista :

profissão.pop();
console.log(profissão);

// Adicionando dois itens no final da lista :

profissão.push('escultor', 'músico');
console.log(profissão);

// Removendo o item no início da lista :

profissão.shift();
console.log(profissão);

// Criando um array e organizando os elementos contidos na lista :

const numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);