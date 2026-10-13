/*
19. Analise o seguinte if. O que acontecerá?
A) Imprime "Opção B", pois 0 é falso.
B) Imprime "Opção A", pois o símbolo = atribuiu 10 a x, e 10 é truthy.
C) O código dá erro porque não se pode usar = dentro do if.
D) Não imprime nada.
*/
let x = 0;

if (x = 10) {
    console.log("Opção A");
} else {
    console.log("Opção B");
}

console.log("B) Imprime Opção A, pois o símbolo = atribuiu 10 a x, e 10 é truthy.");