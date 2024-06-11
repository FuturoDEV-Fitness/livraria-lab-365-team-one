const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento');
const InstrumentoCrud = require('./classes/IntrumentoCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar': 
            const nome = await rl.question('Digite o nome do instrumento: ');
            const tipo = await rl.question('Digite o tipo do instrumento: ');
            const estado = await rl.question('Digite o estado do instrumento (Danificado, Novo, Usado): ');
            const instrumento = new Instrumento(nome)
            instrumento.setTipo = tipo;
            instrumento.setEstado = estado;

            const crud = new InstrumentoCrud()
            crud.criar(instrumento)
            
            rl.close();
            break;
        case 'deletar': {
            const codigo = await rl.question('Digite o código do instrumento a ser deletado: ');
            const crud = new InstrumentoCrud()
            crud.deletar(codigo)

            rl.close();
            break;
        }
        case 'alterar': {
            const codigo = await rl.question('Digite o código do instrumento a ser alterado: ');
            const novoNome = await rl.question('Digite o nome do instrumento a ser alterado: ');
            const novoTipo = await rl.question('Digite o novo tipo do instrumento: ');
            const novoEstado = await rl.question('Digite o novo estado do instrumento (Danificado, Novo, Usado): ');
            const novosDados = {
                nome: novoNome,
                tipo: novoTipo,
                estado: novoEstado
            };

            const crud = new InstrumentoCrud();
            crud.alterar(codigo, novosDados);
            rl.close();
            break;
        }
        case 'consultar': {
            const palavra = await rl.question('Digite o nome do instrumento a ser consultado: ');
            const crud = new InstrumentoCrud()
            crud.consultar(palavra)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
