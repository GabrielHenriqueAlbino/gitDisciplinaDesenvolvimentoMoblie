const mongoose = require('mongoose');
const alunoSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    email: String,
    peso: Number,
    altura: Number,
    senha: String
});

module.exports = mongoose.model('Aluno', alunoSchema);