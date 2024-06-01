class Livro {
    #codigo = '';
    #nome = "";
    #quantidadePaginas = 0;
    #genero = "";
    #autor = "";

    constructor(nome) {
        this.#nome = nome;
    }

    get getCodigo() {
        return this.#codigo;
    }

    set setCodigo(codigo) {
        this.#codigo = codigo;
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getQuantidadePaginas() {
        return this.#quantidadePaginas;
    }

    set setQuantidadePaginas(quantidadeDePaginas) {
        this.#quantidadePaginas = quantidadeDePaginas;
    }

    get getGenero() {
        return this.#genero;
    }

    set setGenero(genero) {
        this.#genero = genero;
    }

    get getAutor() {
        return this.#autor;
    }

    set setAutor(autor) {
        this.#autor = autor;
    }
}

module.exports = Livro;
