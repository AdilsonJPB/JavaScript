/* variables = A container that stores a value.
               behaves as if it was the value it contains.
*/

let fullName = "Adilson Junior Portilho Barbosa"; // Cria uma variável String com valor de um nome
let age = 19; // Cria uma variável Number com idade
let isStudent = true; // Cria uma variável boolean se esta estudando com false: não, e true: sim

// Obtèm o ID de uma tag e muda seu conteúdo com Temaplate String usando valores armazenados em variáveis
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;