
// Obtém o ID da tag e armazena em uma variável
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age; // inicializa uma variável de nome age

// Quando for clicado na variável que armazena a tag mySubmit é chamada uma função
mySubmit.onclick = function () {
    age = myText.value; // Armazena o valor da tag input na variável age
    age = Number(age) // Como no input se recebe uma String, é necessário converter seu tipo de dado

    // Se a idade for maior ( > ) menor ( < ) ou igual ( == ) que um valor, é mostrado na tela um conteúdo armazenado na variável resultElement 
    if (age > 100) {
        resultElement.textContent = `You are TOO old to enter this site`;
    } else if (age == 0 ){
        resultElement.textContent = `You can't enter, you were just born`;
    } else if (age > 18) {
        resultElement.textContent = `You are old enought to enter this site`;
    } else if (age < 0) {
        resultElement.textContent = `Your age can't be below 0`;
    } else { // Se a condição não der verdadeiro em nnenhuma das acima, é executado a que der false onde estiver ( else )
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}