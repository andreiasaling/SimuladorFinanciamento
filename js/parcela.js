export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor (numero, valor, juros, amortizacao, saldo) {
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;
    }

    //criar getters e setters, aguardar pra ver quais serão usados, para não
    // criar de todos sem necessidade

}