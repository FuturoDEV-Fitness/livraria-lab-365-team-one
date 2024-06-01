const fs = require("fs");

class LivroCrud {
  constructor() {
    this.filePath = "./src/files/livros.json";
  }

  criarLivro(livro) {
    try {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf8"));

      console.log(conteudoAtual)

      conteudoAtual.push({
        codigo: livro.getCodigo,
        nome: livro.getNome,
        quantidadePaginas: livro.quantidaPaginas,
        genero: livro.getGenero,
        autor: livro.getAutor
      });

      fs.writeFileSync(this.filePath, JSON.stringify(conteudoAtual, null, 2));
      console.log("Livro criado com sucesso!");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  deletarLivro(codigo) {
    try {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf8"));
      const updatedLivros = conteudoAtual.filter((livro) => livro.codigo !== codigo);

      fs.writeFileSync(this.filePath, JSON.stringify(updatedLivros));
      console.log("Livro deletado com sucesso!");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async consultarLivros(codigo) {
    try {
      const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, "utf8"));

      const livro = conteudoAtual.find((livro) => livro.codigo === codigo);
      return livro;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = LivroCrud;
