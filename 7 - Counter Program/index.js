// COUNTER PROGRAM

// Obtém o ID das tags e armazena em variáveis
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0; // inicializa uma+ variável com 0

// quando o botão com a tag especificada é clicada é chamada uma função
decreaseBtn.onclick = function () {
    count--; // decrescenta o valor atual da variável count
    countLabel.textContent = count; // armazena o valor atual de count em countLabel e é mostrado na tela
}

increaseBtn.onclick = function () {
    count++; // acrescenta o valor atual da variável count
    countLabel.textContent = count; // armazena o valor atual de count em countLabel e é mostrado na tela
}

resetBtn.onclick = function () {
    count = 0; // reseta o valor atual de count com a atribuição de 0
    countLabel.textContent = count; // armazena o valor atual de count em countLabel e é mostrado na tela
}