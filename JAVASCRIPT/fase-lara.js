// início da programação da primeira fase da lara (fuga) //
function escolha1(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../lgame-over-lara-fase-1-0.html');
    } else if (destino == 'B') {
        return location = ('../lfase-1-1-lara.html');
    } else {
        return escolha1()
    }
}
// fim da programação da primeira fase da lara (fuga) //

// início da programação da segunda fase da lara (Egito) //
function escolha2(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../lfase-2-1-lara.html');
    } else if (destino == 'B') {
        return location = ('../lgame-over-lara-fase-2-0.html');
    } else {
        return escolha2()
    }
}
// fim da programação da segunda fase da lara (Egito) //

// início da programação da última fase da lara (Namíbia) //
function escolha3(){
    alert ("Escolha e digite no prompt alguma das alternativas A ou B (em maiúsculo e somente uma opção)");
    var destino = prompt("Escolha seu destino");
    if (destino == 'A') {
        return location = ('../lfase-3-3-lara.html');
    } else if (destino == 'B') {
        return location = ('../lgame-over-lara-fase-3-0.html');
    } else {
        return escolha3()
    }
}
// fim da programação da última fase da lara (Namíbia) //