const crypto = require('crypto');

class Leitor {
    #codigo = 0;
    #nome = ''
    #cpf = 0;
    #rg = 0;
    #dataNascimento = '';


    constructor(codigo, nome, cpf, rg, dataNascimento) {
       this.#codigo = crypto.randomUUID(),
       this.#nome = nome,
       this.#cpf = cpf,
       this.#rg = rg
       this.#dataNascimento = dataNascimento
      
    }

    get getCodigo(){
        return this.#codigo
    }
    set setCodigo(codigo){
        this.#codigo = codigo
    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome
    }
    get getCpf(){
        return this.#cpf
    }
    set setCpf(cpf){
        this.#cpf = cpf
    }
    get getDataNascimento(){
        return this.#dataNascimento
    }
    set setDataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento
    }
    get getRg(){
        return this.#rg
    }
    set setRg(rg){
        this.#rg = rg
    }

}

module.exports = Leitor;