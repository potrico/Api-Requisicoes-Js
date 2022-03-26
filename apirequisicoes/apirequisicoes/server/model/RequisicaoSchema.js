const mongoose = require("mongoose");
const RequisicaoSchema = new mongoose.Schema({
    titulo: { type: String, required: true, unique: true },
    descricao: { type: String, required: true},
    dataHoraCriada: { type: Date, required: true },
    status: { type: String, required: true},
    prazoAtendimento: { type: Date, required: true },
    Solicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solicitante',
        require: true,
    },
    TipoRequisicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoRequisicao',
        require: true,
    }
});
module.exports = mongoose.model("Requisicao", RequisicaoSchema);  