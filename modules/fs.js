const fs = require('fs')
const path = require('path')

//criar uma pasta 
/* fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error) {
       return console.log('Erro: ', error)
    }


    console.log('Pasta criada com sucesso!')
} ) */


//criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.html'), `hello node!`, (error) => {
    if(error){
        return console.log('Erro: ', error)

    }

    console.log('arquivo criado com sucesso')

    //adicionar um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.html'), 'hello world', (error) => {
        if(error) {
            return console.log('Erro: ', error)
        }

        console.log('Arquivo adicionado com sucesso')
    })


    // ler arquivo 
    fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf-8', (error,data) => {
        if(error) {
            return console.log('Erro: ', error)
        }

        console.log('Dados: ', data)
    })
})


