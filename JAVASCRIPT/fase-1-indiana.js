// início da programação da primeira fase do indiana (carta) //
function escolha1(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../game-over-indiana-fase1.html');
    } else if (destino == 'B') {
        return location = ('../fase-1-1-indiana.html');
    } else {
        return escolha1()
    }
}
// fim da programação da primeira fase do indiana (carta) //

// início da programação da primeira fase do indiana (floresta1) //
function escolha2(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../fase-1-3-indiana.html');
    } else if (destino == 'B') {
        return location = ('../game-over-indiana-fase1-2.html');
    } else {
        return escolha2()
    }
}
// fim da programação da primeira fase do indiana (floresta1) //

// início da programação da primeira fase do indiana (floresta2) //
function escolha3(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../game-over-indiana-fase1-3.html');
    } else if (destino == 'B') {
        return location = ('../fase-1-4-indiana.html');
    } else {
        return escolha2()
    }
}
// fim da programação da primeira fase do indiana (floresta2) //