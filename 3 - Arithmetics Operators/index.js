/* arithmetics operators = operands (values, variables, etc.)
                           operators (+ - * /)
                           ex. 11 = x + 5;
*/

// Cria uma variável Number com nome de estudantes
let students = 30;

// pega a variavel e faz igual ao valor atual com alguma operação.
students = students + 1; // adição
students = students - 1; // subtração
students = students * 2; // multiplicação
students = students / 2; // divisão
students = students ** 2; // exponente
let extraStudents = students % 3; // resto

// pega o valor da variável atual e utiliza algum operador com sinal de igual "=" para evitar repetir o nome da variável
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

// Pega valor atual da variável e incrementa em mais 1 ou em menos 1
students++;
students--;

// Precedência/ordem das operações
/*
    Operator precendence
    1.parenthesis ()
    2.exponents
    3.multiplication & division & modulo
    4.addition e subtraction
*/

// variaǘel com o valor do resultado;
let result  = 0.46875;

// Exibe no consle o valor atual da variável result
console.log(result)