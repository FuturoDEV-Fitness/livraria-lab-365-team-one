const readline = require('readline/promises');
const Leitor = require ('./classes/Leitor.js');
const LeitorCrud = require('./classes/LeitorCrud.js')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const leitor = new Leitor();
            const nome = await rl.question("Qual o nome do leitor?");
            leitor.setNome = nome;
            const cpf = await rl.question("Qual o CPF do leitor?");
            leitor.setCpf = cpf;
            const rg = await rl.question("Qual o RG do leitor?");
            leitor.setRg = rg;
            const dataNascimento = await rl.question("Qual a data de nascimento?");
            leitor.setDataNascimento = dataNascimento;
            

            const crud = new LeitorCrud()
            crud.criar(leitor)

            rl.close();
            break;
        case 'deletar': {
            const deletarNome = await rl.question("Qual o nome do leitor?");
            const crud = new LeitorCrud()
            crud.deletar(deletarNome)
            rl.close();
            break;
        }
        case 'consultar': {
            const consultaNome = await rl.question("Qual o nome do leitor?");
            const crud = new LeitorCrud()
            crud.consultar(consultaNome)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
