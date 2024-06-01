var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    const limite_linhas = 7;

    // var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimassssssssssss ${limite_linhas} medidas`);
    console.log("asdasdas")

    medidaModel.buscarUltimasMedidas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar as ultimas medidas.",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarUltimasMedidas,
};
