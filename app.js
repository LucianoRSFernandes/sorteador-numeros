function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let limiteInferior = parseInt(document.getElementById('de').value);
    let limiteSuperior = parseInt(document.getElementById('ate').value);
    
    if (limiteInferior >= limiteSuperior) {
        alert('O número inserido no campo "do número" deve ser menor que o inserido no campo "até o número", Verifique!');
        return;
    }

    if (quantidade > (limiteSuperior - limiteInferior +1)) {
        alert('verificar intervalo considerado para sorteio');
        return;
    }

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(limiteInferior, limiteSuperior);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(limiteInferior, limiteSuperior);
        }

        sorteados.push(numero);
    }

    console.log(sorteados);
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarStatusBotao();
}

function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
         } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();

        let botao = document.getElementById('btn-reiniciar');
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
}