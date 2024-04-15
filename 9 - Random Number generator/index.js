// RANDOM NUMBER GENERATOR

// Obtém o ID das tag e armazena em uma variável
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1; // armazena um valor na variavel min
const max = 6; // armazena um valor na variavel max
let randomNum; // inicializa uma variável

// Quando for clicado na variável que recebe o valor de um ID, é chamado uma função
myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min; // Armazena um número aleatório dentro da variável randomNum
    myLabel.textContent = randomNum; // Atribui o valor de randomNumber em myLabel e mostra na tela
}