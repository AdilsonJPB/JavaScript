// String Methods = allow you to manipulate and work with text (Strings)

let userName = " Adilson"; // Declaração da variável userName com um espaço em branco antes do nome
let phoneNumber = "123-456-7890"; // Declaração da variável phoneNumber com um número de telefone no formato padrão

console.log(userName.charAt(2)); // Retorna o caractere na posição 2 da string userName
console.log(userName.indexOf("o")); // Retorna o índice da primeira ocorrência da letra "o" na string userName
console.log(userName.lastIndexOf("o")); // Retorna o índice da última ocorrência da letra "o" na string userName
console.log(userName.length); // Retorna o comprimento da string userName

userName = userName.trim(); // Remove os espaços em branco do início e do fim da string userName
console.log(userName);

userName = userName.toUpperCase(); // Converte todos os caracteres da string userName para maiúsculas
console.log(userName);

userName = userName.toLowerCase(); // Converte todos os caracteres da string userName para minúsculas
console.log(userName);

userName = userName.repeat(3); // Repete a string userName três vezes
console.log(userName);

let result = userName.startsWith(" "); // Verifica se a string userName começa com um espaço em branco
console.log(result);

let result_1 = userName.endsWith(" "); // Verifica se a string userName termina com um espaço em branco
console.log(result);

let result_2 = userName.includes(" "); // Verifica se a string userName contém um espaço em branco
console.log(result_2);

phoneNumber = phoneNumber.replaceAll("-", "/"); // Substitui todos os hífens por barras na string phoneNumber
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0"); // Adiciona zeros à esquerda na string phoneNumber até atingir o comprimento de 15 caracteres
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0"); // Adiciona zeros à direita na string phoneNumber até atingir o comprimento de 15 caracteres
console.log(phoneNumber);
