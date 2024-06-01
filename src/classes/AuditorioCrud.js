
const fs = require('fs')
class AuditorioCrud {
    
    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    deletar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync( this.filePath, 'utf-8'))
 
        const auditorioEncontrado = conteudoAtual.filter(auditorio => auditorio.nome !== palavra)

    
        if(auditorioEncontrado){
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(auditorioEncontrado, null, 2),
                'utf-8'
            )
        }

    }

    consultar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync( this.filePath, 'utf-8'))

        const auditorioEncontrado = conteudoAtual.find(auditorio => auditorio.nome === palavra)
        
        if(auditorioEncontrado){
            console.log("Auditório encontrado!")
        }
        else{
            console.log("Auditório não encontrado!")

        }
    }


    criar(auditorio){

        /*ler tudo que tem dentro do arquivo json*/
        const conteudoAtual = JSON.parse(fs.readFileSync( this.filePath, 'utf-8'))
       
        /*Insere dentro do array recuperado o objeto de auditorio */
        conteudoAtual.push({
            codigo: auditorio.getCodigo,
            nome: auditorio.getNome,
            descricao: auditorio.getDescricao,
            lotacaoMaxima: auditorio.getLotacaoMaxima,
        })

        /*Escreve no arquivo*/ 
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

}

module.exports = AuditorioCrud;