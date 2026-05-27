console.log("bem vindos a ppi ");
// introdução java script
// variáveis
// var name = 'joão'; ou mais usado
let name = "joão";
let age = 18;
let isStudent = true;
// isS var booleana
const PI = 5.14;
// CONST = NÃO PODE MUDAR DE VALOR
// PI = 4; errado
console.log(PI);

//  Operadores Aritiméticos
let x = 5 + 5; //soma
let y = "5" + 5; //concatenação
let z = "hello" + 5;

console.log(x, y, z);
console.log(x**2, y, z); 
console.log(typeof x); // vai dizer tipo de variável
// ativar o formatador prettier
// ALT + SHIFT + F
// Operadores relacionais
console.log(x != 2); // '!' diferença
console.log('5' == 5); // compara tipo OU valor
console.log('5' === 5); //compara tipo E valor '===' igual

//  operadores de incremento
 //ou '--'
console.log(x++);
console.log(x);
console.log(++x);

// Operadores lógicos - && (AND),|| (OR), !(NOT)
let isExpression = (true && 5+2*3 < 10) || false;
console.log(isExpression);

// if...else
    // if (condition) {
    //     // condition === true
    // } else {
    //     // condition === false
    // }

// template Strings
let text =
`react é bom!
programar javascript \\`;
console.log(text);

// for (let index = 0; index < Array.length; index++) {
//     const element = array[index];
// }

// Array
let fruits =['banana', 'orange', 'Apple', 'mango'];
// console.log(fruits.length); // tamanho
console.log(fruits[2]); // 0,1,2,3 id.

fruits.push('kiwi'); //push: fila (insere no final)
console.log(fruits);

console.log(fruits.pop()); // retorna e remova o último elemento
console.log(fruits);

console.log(fruits.shift()); // remove retorna o primeiro elemento
console.log(fruits);

fruits.unshift('lemon'); // insere elemento no começo da lista
console.log(fruits);

// argumento 1- posição (0,1,2,3...)
// argumento 2 quantos elementos serão removidos
// argumento 3- lista de elementos que serão inseridos
fruits.splice(2, 0, 'kiwi');
console.log(fruits);

fruits.splice(2, 3);
console.log(fruits);

// desafio - substituir 'apple' or 'kiwi'

fruits.splice(3, 1, 'kiwi');
console.log(fruits);    

//busca indice do elemento 'kiwi'
            
// let index = fruits.indexOF('kiwi');
//  console.log(index);

//  fruits.splice(index, 1, 'apple');
// console.log(fruits);

// ordem crescente
fruits.sort(); //tosort()
console.log(fruits);

// ordem decrescente
fruits.reverse(); //toReversed()
console.log(fruits);

let fruitsSort = fruits.toSorted(); //não altera array
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); //não altera array
console.log(fruits);
console.log(fruitsReverse);

// const numbers = [45, 4, 9, 16, 25];
// console.log(numbers);

//desafio
// Ordem crescente
fruits.sort();
console.log(fruits);

// Ordem decrescente
fruits.reverse();
console.log(fruits);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// DESAFIO
// Criar um array 'numbers2' que armazene os valores de 'numbers' * 2
// Output: [90, 8, 18, 32, 50]
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b) => b - a)); //D

numbers.sort((a, b) => a - b);
// Maior valor
console.log("Maior =", numbers[numbers.length - 1]);
// Menor valor
console.log("Menor =", numbers[0]);

// **********************************
// Aula 13/05 - Funções, array destructuring, spread operator
console.log(fruits);

const fruits2 = ["Kiwi", "Avocado"];
console.log([...fruits2, "Grape"]);

// Spread - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra A
const out = [];
const letra = "a";

// for (let i = 0; i < fruits3.length; i++) {
//   const fruit = fruits3[i];
//   //toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }

// fruits3.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a primeira ocorrência,
// de acordo com a condição
let outFind = fruits3.find(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFind);

// filter - retorna TODAS as ocorrências,
// de acordo com a condição
let outFilter = fruits3.filter(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os
// números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
  soma += number;
});
console.log(soma);

// reduce
console.log(
  numbers.reduce((soma, number) => soma + number)
);

// Object
const pessoa = {
  nome: 'Zé Vaqueiro',
  idade: 25,
  profissao: 'Cantor/Compositor'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const pessoa2 = { ...pessoa, hobby: 'vaquejada'};
console.log(pessoa2);

// Atribuição por desestruturação
const { nome, idade } = pessoa2;
console.log(nome, idade);

//construtor
function Product(name, sto, ram, price, qty, category){
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("iPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("iPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("iPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("iPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const estoque = 
[{...p1}, 
{...p2},
{...p3},
{...p4},
{...p5},
{...p6}];
console.log(estoque);

//desafio
// valor total de todos os produtos em estoque
const valorTotal = estoque
.reduce((valor, p) => valor + p.price * p.qty, 0)
.toFixed(2);
console.log(`valor total: R$ ${valorTotal}`);

//ordene os produtos por nome (crescente/decrescente)

// Crescente
console.log(
    estoque.toSorted((a, b) => a.name.localeCompare(b.name))
);

// Decrescente
console.log(
    estoque.toSorted((a, b) => b.name.localeCompare(a.name))
);

//ordene os produtos por preço (crscente/descrescente)

// Crescente
console.log(
    estoque.toSorted((a, b) => a.price - b.price)
);

// Decrescente
console.log(
    estoque.toSorted((a, b) => b.price - a.price)
);

// filtre produtos de acordo uma categoria

let celulares = estoque.filter(
    (produto) => produto.category === "Celular"
);

console.log(celulares);
