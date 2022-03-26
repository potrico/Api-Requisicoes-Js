const Colaborador = require('../model/ColaboradorSchema');

module.exports = {
    
  listar: async (req, res) => {
    Colaborador.find((err, objetos) => {
      (err ? res.status(400).send(err) : res.status(200).json(objetos));
    }).sort({ nome: 1 }); // -1 decrescente  1 crescente
  },

   




};

