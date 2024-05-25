var viagemModel = require("../models/viagemModel");



function inserir(req, res) {
    var fkUsuario = req.body.fkUsuario;  
    var fkNebulosa = req.body.fkNebulosa;  
    var fkGalaxia = req.body.fkGalaxia;  
    var fkPlaneta = req.body.fkPlaneta;  

    if (fkUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkNebulosa == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        viagemModel.inserir(fkUsuario,fkNebulosa, fkGalaxia, fkPlaneta)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}



module.exports = {
    inserir
}