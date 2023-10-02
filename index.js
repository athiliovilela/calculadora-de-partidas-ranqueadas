let nomeDoPersonagem = "Hantaro"
let rank = saldoDasPartidas(83,2)

function saldoDasPartidas(vitorias, derrotas){
    saldoDePontos = vitorias  - derrotas
    win = vitorias
    return saldoDePontos
    
}

if (saldoDePontos <= 10){
    rank = "Ferro"
}
else if(saldoDePontos >=11 && saldoDePontos <=20 ){
    rank = "Bronze"
}
else if( saldoDePontos >=21 && saldoDePontos <=50){
    rank = "Prata"
}
else if(  saldoDePontos >=51 && saldoDePontos <=80){
    rank = "Ouro"
}
else if( saldoDePontos >=81 && saldoDePontos <=90){
    rank = "Diamante"
}
else if( saldoDePontos>=91 && saldoDePontos <=100 ){
    rank = "Lendário"
}
else if( saldoDePontos>=101){
    rank = "Imortal"
}

console.log("O Herói " + nomeDoPersonagem,"tem o saldo de "+ win, "e está no nível de "+ rank)