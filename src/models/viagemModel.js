var database = require("../database/config");

function inserir(fkUsuario, fkNebulosa, fkGalaxia, fkPlaneta) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", fkUsuario);
    var instrucaoSql = `
    insert into escolhaUsuario (fkUsuario,fKNebulosa, fkGalaxia, fkPlaneta) values ('${fkUsuario}','${fkNebulosa}','${fkGalaxia}','${fkPlaneta}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir
};