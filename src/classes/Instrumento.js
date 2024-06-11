const crypto = require("crypto");
class Instrumento {

    #codigo = ""
    #nome = ""
    #tipo = ""
    #estado = ""

    constructor(nome) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
    }
    
    get getCodigo(){
        return this.#codigo
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome){
        this.#nome = nome
    }

    get getTipo(){
        return this.#tipo
    }

    set setTipo(tipo){
        this.#tipo = tipo
    }

    get getEstado(){
        return this.#estado
    }

    set setEstado(estado){
        this.#estado = estado
    }
}

module.exports = Instrumento;