/*Código, Nome, Descrição,
Quantidade de pessoas suportado(lotaçãoMaxima)*/

const crypto = require("crypto");
class Auditorio {
    #codigo = ""
    #nome = ""
    #descricao = ""
    #lotacaoMaxima = 0

    constructor(nome) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome
    }

    get getCodigo() {
        return this.#codigo
    }
  
    get getNome() {
        return this.#nome
    }
    set setNome(nome) {
        this.#nome = nome
    }
    get getDescricao() {
        return this.#descricao
    }
    set setDescricao(descricao) {
        this.#descricao = descricao
    }
    get getLotacaoMaxima() {
        return this.#lotacaoMaxima
    }
    set setLotacaoMaxima(lotacaoMaxima) {
        this.#lotacaoMaxima = lotacaoMaxima
    }
}


module.exports = Auditorio;