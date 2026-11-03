function calcularPontuacaoTotal(pontuacoes) {
    let pontuacaoTotal = 0;
    for (let i = 0; i < pontuacoes.length; i++) {
        pontuacaoTotal += pontuacoes[i]
    }
    console.log("pontuação total do jogador:", pontuacaoTotal);
}
//array de pontuações do jogador
const pontuacoesDoJogador = [10, 1,20,5,8];
//chamando a função para culcular a pontuação total do jogador
calcularPontuacaoTotal(pontuacoesDoJogador);