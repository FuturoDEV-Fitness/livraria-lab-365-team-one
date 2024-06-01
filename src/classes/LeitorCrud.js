const fs = require('fs');
class LeitorCrud {

    constructor() {
       this.filePath = './src/files/leitores.json';
    }


    criar(leitor){
        
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        conteudoAtual.push({
            codigo: leitor.getCodigo,
            nome: leitor.getNome,
            cpf: leitor.getCpf,
            rg: leitor.getRg,
            dataNascimento: leitor.getDataNasimento
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2), //null e 2 para salvar organizado
            'utf-8'
        )
    }
    consultar(consultaNome){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        const leitorEncontrado = conteudoAtual.find(leitor => leitor.nome === consultaNome)
        if(leitorEncontrado){
            console.log(leitorEncontrado)
        } else{
            console.log("Leitor não encontrado")
        }
    }

    deletar(deletarNome){
              // ler o conteudo 
      //  usar filter para remover o elemento
      // salva de novo no arquivo o array filtrado
    }
}


module.exports = LeitorCrud;