// How to accept user input

// Inicializo a variável username
let userName;

// Quando for clicado na tag com id mySubmit será chamada uma função
document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value; // obtém o ID da tag button e armazena o valor da tag myText na variável userName
    document.getElementById("myTitle").textContent = `Welcome ${userName}`; // obtém o ID de uma tag e muda seu conteúdo com uma Template String junto do valor armazenado em userName
};