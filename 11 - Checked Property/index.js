/* checked = property that determines the checked state of an
             HTML checkbox or radio element
*/

// Obtém o ID da tag e armazena em uma variável
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// Quando a variável mySubmit for clicada, será chamada uma função
mySubmit.onclick = function () {
    if (myCheckBox.checked) { // Se myCheckBox ser verdadeiro, mostra um conteúdo na variável subResult
        subResult.textContent = `You are subscribed!`;
    } else {  // Se myCheckBox ser falso, mostra um conteúdo na variável subResult
        subResult.textContent = `You are not subscribed!`
    }

    if (visaBtn.checked) { // Se a variável visaBtn for verdadeiro, mostra um conteúdo na variável paymentResult
        paymentResult.textContent = `You subscribed with Visa`;
    } else if (masterCardBtn.checked) { // Se a variável MasterCard for verdadeiro, mostra um conteúdo na variável paymentResult
        paymentResult.textContent = `You subscribed with MasterCard`;
    } else if (payPalBtn.checked) { // Se a variável PayPal for verdadeiro, mostra um conteúdo na variável paymentResult
        paymentResult.textContent = `You subscribed with PayPal`;
    } else { // Se der falso as todas as condições acima, é executado o seguinte
        paymentResult.textContent = `You must select a payment type`;
    }
}