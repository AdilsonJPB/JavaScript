/* Ternary Operator = a shortcut to if{} and else{} statements
                      helps to assign a variable based on a condition
                      condition ? codeIftrue : codeIffalse
*/

// inicializo variável age
let age = 12;
let message = age > 18 ? "You're an adult" : "You're a minor"; // se age maior que 18, mostra uma mensagem no console, caso contrário mostra outra
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";// se time menor que 12, mostra uma mensagem no console, caso contrário mostra outra
console.log(greeting);

let isStudent = tue;
let message_1 = isStudent ? "You are a student" : "You are NOT a student"; // se isStudent true, mostra uma mensagem no console, caso contrário mostra outra
console.log(message_1)

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;// se purchaseAmount maior ou igual 100, há um desconto, caso contrário não há desconto
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);