alert('Boas vinsdas ao jogo do número secreto');
let numeroMaximo = 1000, numeroSecreto = parseInt(Math.random() * numeroMaximo +1), chute, tentativas = 1, chuteProximidade;
console.log(numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break
    } else {
        chuteProximidade = chute > numeroSecreto ? 'menor' : 'maior';
        alert(`O numéro secreto é ${chuteProximidade} que o ${chute}`);
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Correta resposta! número secréto é o ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativa}`);
