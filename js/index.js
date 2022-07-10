import { Financiamento } from './financiamento.js';
import { FinanciamentoCarencia } from './financiamentoCarencia.js';

const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const botaoLimpar = document.querySelector('#botaoLimpar');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

function limpaCorpoTabela() {
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

//exibe-oculta lista suspensa com meses de carência
comCarencia.addEventListener('change', function () {
    if (this.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
});

botaoCalcular.addEventListener('click', function () {
    limpaCorpoTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if (comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});

botaoLimpar.addEventListener('click', function () {
    textoValor.value = '';
    textoEntrada.value = '';
    textoTaxaJuros.value = '';
    textoPrazo.value = '';
    comCarencia.checked = false;
    listaSuspensa.setAttribute('hidden','hidden');
    limpaCorpoTabela();
    textoValor.focus();
});