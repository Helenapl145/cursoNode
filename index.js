const {Person} = require('./person') /*o require é usado para exportar o arquivo*/
const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/connect')
dotenv.config()

connectToDataBase()

require('./modules/express')

//require('./modules/path')

//require('./modules/fs')

//require('./modules/http')

const person = new Person('Helena') /*utiliza a função criada*/

