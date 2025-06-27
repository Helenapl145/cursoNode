const path = require('path')

/*nome do arquivo*/
console.log(path.basename(__filename))

/*diretorio do arquivo*/
console.log(path.dirname(__filename))

/*extensão do arquivo*/
console.log(path.extname(__filename))

/*objeto do arquivo*/
console.log(path.parse(__filename))

/*criação de um path*/
console.log(path.join(__dirname, 'teste', 'index.html'))