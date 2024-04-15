// SWITCH = can be  an efficient replacement to many else if statements

// iniclaliza variáveis
let testScore = 13;
let letterGrade;

// switch funciona como IF só que mais curto
switch(true) {
    case testScore >= 90: // se for verdadeiro, adiciona um valor a variável letterGrade
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default: // Se não passar em nenhuma das condições acima e der falso, default é executado
        letterGrade = "F";
}