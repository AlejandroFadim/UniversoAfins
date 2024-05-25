var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkUsuario = (SELECT fkUsuario FROM escolhaUsuario GROUP BY fkUsuario ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkUsuario,
    (SELECT n.nome FROM nebulosa n INNER JOIN escolhaUsuario eu ON n.idNebulosa = eu.fKNebulosa GROUP BY n.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_nebulosa_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fKNebulosa = (SELECT fKNebulosa FROM escolhaUsuario GROUP BY fKNebulosa ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fKNebulosa,
    (SELECT g.nome FROM galaxia g INNER JOIN escolhaUsuario eu ON g.idGalaxia = eu.fkGalaxia GROUP BY g.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_galaxia_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkGalaxia = (SELECT fkGalaxia FROM escolhaUsuario GROUP BY fkGalaxia ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkGalaxia,
    (SELECT p.nome FROM planeta p INNER JOIN escolhaUsuario eu ON p.idPlaneta = eu.fkPlaneta GROUP BY p.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_planeta_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkPlaneta = (SELECT fkPlaneta FROM escolhaUsuario GROUP BY fkPlaneta ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkPlaneta;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
