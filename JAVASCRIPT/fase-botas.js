// início da programação da primeira fase do botas (vilarejo) //
function escolha1(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../bfase-1-3-botas.html');
    } else if (destino == 'B') {
        return location = ('../bgame-over-botas-fase-1-0.html');
    } else {
        return escolha1()
    }
}
// fim da programação da primeira fase do botas (vilarejo) //

// início da programação da segunda fase do botas (deserto) //
function escolha2(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../bgame-over-botas-fase-2-0.html');
    } else if (destino == 'B') {
        return location = ('../bfase-2-2-botas.html');
    } else {
        return escolha2()
    }
}
// fim da programação da segunda fase do botas (deserto) //