let totalGeral = 0;
function start() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 1;
}
start();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preço   = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                                                   <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
                                               </section>`;
    
    totalGeral = totalGeral + preço;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    start();
    totalGeral = 0;
}