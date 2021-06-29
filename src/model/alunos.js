const mongoose = require("mongoose");

const AlunosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "no name"],
    },
    description: {
        type: String,
        required: [true, "no description"],
    },
    classe: {
        type: String,
        required: [true, "no class"],
    },
});

const Alunos = (module.exports = mongoose.model("alunos", AlunosSchema));
