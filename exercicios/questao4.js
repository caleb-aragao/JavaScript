/*
4. No código abaixo (Switch Case), o aluno esqueceu um detalhe importante. O que será impresso no console?
A) 2º Lugar
B) 2º Lugar, 3º Lugar e Participante.
C) Prata
D) Participante
*/
let medalha = "Prata";

switch (medalha) {
    case "Ouro":
        console.log("1º Lugar");
    case "Prata":
        console.log("2º Lugar");
    case "Bronze":
        console.log("3º Lugar");
    default:
        console.log("Participante");
}

console.log("B) 2º Lugar, 3º Lugar e Participante.");