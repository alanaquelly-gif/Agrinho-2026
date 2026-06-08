// Cria as variáveis para guardar os pontos na memória da página
let curtidas = 0;
let naoCurtidas = 0;

// Pega os elementos do HTML para poder mexer neles
const btnCurtir = document.getElementById('btn-curtir');
const btnNaoCurtir = document.getElementById('btn-nao-curtir');
const placarCurtir = document.getElementById('placar-curtir');
const placarNaoCurtir = document.getElementById('placar-nao-curtir');

// Escuta o clique no botão Curtir
btnCurtir.addEventListener('click', () => {
    curtidas++; // Soma 1
    placarCurtir.textContent = curtidas; // Atualiza o placar escrito
});

// Escuta o clique no botão Não Curtir
btnNaoCurtir.addEventListener('click', () => {
    naoCurtidas++; // Soma 1
    placarNaoCurtir.textContent = naoCurtidas; // Atualiza o placar escrito
});
