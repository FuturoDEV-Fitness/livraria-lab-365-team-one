const readline = require("node:readline/promises");
const Livro = require('./classes/Livro.js')
const LivroCrud = require("./classes/LivroCrud.js")

const crypto = require("crypto");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {
    const livroCrud = new LivroCrud();
    const resposta = await rl.question(
        "Escolha uma ação (criar, deletar, alterar, consultar): "
    );

    switch (resposta) {
        case "criar":
            const nome = await rl.question("Qual o nome do livro? ");
            const paginas = await rl.question("Qual a quantidade de páginas? ");
            const genero = await rl.question("Qual o gênero do livro? ");
            const autor = await rl.question("Qual o autor do livro? ");
            const livro = new Livro(nome);

            livro.setCodigo = generatedCode();
            livro.setQuantidadePaginas = paginas;
            livro.setGenero = genero;
            livro.setAutor = autor;


            livroCrud.criarLivro(livro);
            break;
        case "deletar": {
            const idDeletar = await rl.question("Qual o id do livro? ");
            livroCrud.deletarLivro(idDeletar);
            break;
        }
        case "consultar": {
            const idConsultar = await rl.question("Qual o id do livro? ");
            const livro = await livroCrud.consultarLivros(idConsultar);
            console.log(livro);
            break;
        }
        default:
            console.log("Ação não reconhecida.");
    }
    rl.close();
}

function generatedCode() {
    let uuid = crypto.randomUUID();
    return uuid;
}

run();
