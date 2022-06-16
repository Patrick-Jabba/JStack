const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find -> buscar
const find = array.find((product) => product.price >= 1000);
//busca e retorna o primeiro elemento que retornar true;

// .findIndex -> retorna o indice do primeiro elemento true achado
const findIndex = array.findIndex((product) => product.price > 5000);

// console.log({ findIndex });
// console.log('Produto: ', array[findIndex]);

// .some & every
const some = array.some((product) => product.price < 1000);
//console.log({some});

const every = array.every((product) => product.price >= 1000);
//console.log({ every });

/* .map -> pega o array de um jeito e cria um novo baseado no anterior com alguma propriedade modificada */
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}));

//console.log({ map });

/* .filter -> semelhantemente ao find também retorna o elemento true encontrado mas diferentemente do find que retorna somente o primeiro elemento que atenda ao requisito da requisição, o filter retorna todos os elementos que atinjam os requisitos da requisição.
*/
const filter = array.filter((product) => product.quantity >= 2);
//console.log({ filter });

/* .reduce diferente dos outros recebe dois argumentos um accumulator e um current que nosso exemplo será o product.
Ao invés de por exemplo correr 1 por 1 com o forEach por exemplo usamos o reduce que vai reduzir o numero total de elementos a um novo tipo

O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
*/
const reduce = array.reduce((accumulator, /*current->*/product) => {
  return accumulator + (product.price * product.quantity);
  
}, 0);
console.log({ reduce });