document.getElementById('qtd').value = 1;
function comprar() {
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdSuperior = document.getElementById('qtd-superior');
    let qtdInferior = document.getElementById('qtd-inferior');

    if (ingressoSelecionado == 'pista') {
        comprarPista(quantidade);
    } else if (ingressoSelecionado == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    document.getElementById('qtd').value = 1;
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert('Desculpe, não a mais essa quantidade de ingreços para a Pista 😔');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista; 
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
        alert('Desculpe, não a mais essa quantidade de ingreços para a parte superior 😔');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior; 
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior) {
        alert('Desculpe, não a mais essa quantidade de ingreços para a parte inferior 😔');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior; 
        alert('Compra realizada com sucesso');
    }
}