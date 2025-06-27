const mongoose = require('mongoose');

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonode.brwojhz.mongodb.net/?retryWrites=true&w=majority&appName=CursoNode`
    );
    console.log('Conexão feita com sucesso!');
  } catch (error) {
    console.log('Aconteceu um erro ao se conectar com o banco de dados:', error);
  }
};

module.exports = connectToDataBase;
