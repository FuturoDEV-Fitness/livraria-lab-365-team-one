const fs = require('fs')

class InstrumentoCrud {

    constructor() {
        this.filePath = './src/files/instrumentos.json'; 
    }

    alterar(codigo, novosDados) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        
        const index = conteudoAtual.findIndex(instrumento => instrumento.codigo === codigo);
        
        if (index !== -1) {
            conteudoAtual[index] = { ...conteudoAtual[index], ...novosDados };
            fs.writeFileSync(this.filePath, JSON.stringify(conteudoAtual, null, 2), 'utf-8');
            console.log(`Instrumento ${codigo} alterado com sucesso!`);
        } else {
            console.log("Instrumento não encontrado");
        }
    }

    deletar(codigo){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        
        const instrumentoEncontrado = conteudoAtual.filter(instrumento => instrumento.codigo !== codigo)

        if(instrumentoEncontrado){
            console.log(`Instrumento ${codigo} deletado com sucesso!`);
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(instrumentoEncontrado, null, 2),
                'utf-8'
            )
        }else{
            console.log("Instrumento não encontrado")
        }
    }

    consultar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        
        const instrumentoEncontrado = conteudoAtual.find(instrumento => instrumento.nome === palavra)

        if(instrumentoEncontrado){
            console.log(instrumentoEncontrado)
        }else{
            console.log("Instrumento não encontrado")
        }
    }

    criar(instrumento){  
        
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        
        conteudoAtual.push({
            codigo: instrumento.getCodigo,
            nome: instrumento.getNome,
            tipo: instrumento.getTipo,
            estado: instrumento.getEstado
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

}

module.exports = InstrumentoCrud;