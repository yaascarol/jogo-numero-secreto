let nSecreto = Math.floor(Math.random()*50) + 1;

function verificarAleatorio() {
    let chute = parseInt(document.getElementById("chute").value);

    if (isNaN(chute) || chute < 1 || chute > 50) {
        alert("Por favor, digite um número válido entre 1 e 50.");
        return;
    }

    if (chute > nSecreto) {
        alert("O número que você digitou é maior que o numero secreto")
    } else if(chute < nSecreto) {
            alert("O número que você digitou é menor que o numero secreto")
        } else {
            alert("Parabéns, voce acertou o némero!")
            document.getElementById("reiniciar").disabled = false;
        }
}

function reiniciarJogo() {
    nSecreto = Math.floor(Math.random() * 50) + 1;
    document.getElementById("chute").value = "";
    alert("Um novo número foi sorteado. Tente adivinhar qual é!");
    document.getElementById("reiniciar").disabled = true;
}