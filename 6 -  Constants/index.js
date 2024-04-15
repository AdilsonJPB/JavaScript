// const = a variable that can't be changed

// Inicializo variáveis, e armazeno o numero de pi em uma constante que seu valor não pode ser mudado, diferente de let
const pi = 3.14159;
let radius;
let circumference;

// Não é possível mudar o valor de pi pois está armazanado em uma constante
//pi = 420;

// obtém o ID da tag button, e ao clicar na tag é chamada uma função
document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value; // armazeno o valor da tag input na variável radius
    radius = Number(radius); // Caso o valor for um tipo de dado diferente de Number, é feito a conversão
    circumference = 2 * pi * radius; // calculo da circumferência
    document.getElementById("myH3").textContent = circumference + "cm"; //Obtém o id de uma tag e mude seu conteúdo
}