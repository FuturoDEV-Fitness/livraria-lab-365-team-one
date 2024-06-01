const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':{

        const descricao = await rl.question("Qual a descrição do auditorio?")
        const lotacaoMaxima = await rl.question("Qual a lotação máxima do auditório? (Número de pessoas apenas)")

        const auditorio = new Auditorio("José de Alencar")
          
        auditorio.setDescricao = descricao  
        auditorio.setLotacaoMaxima = lotacaoMaxima

        const crud = new AuditorioCrud() 
        crud.criar(auditorio)
            
            rl.close();
            break;
        }
        
        case 'deletar': {
           const palavra = await rl.question("Qual o nome do Auditorio que deseja excluir?")

           const crud = new AuditorioCrud()
           crud.deletar(palavra)

            rl.close();
            break;
        }
        
        case 'consultar': {
           
        const palavra = await rl.question("Qual o nome do auditório?")

        const crud = new AuditorioCrud()
        crud.consultar(palavra)
            rl.close();
            break;
        }
        
        default: {
            console.log("Ação não reconhecida.");
            rl.close();
    }

}
}

run();
