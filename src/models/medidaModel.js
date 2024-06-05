var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `SELECT
    (SELECT n.nome FROM nebulosa n 
    INNER JOIN escolhaUsuario eu ON n.idNebulosa = eu.fKNebulosa 
    GROUP BY n.nome ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 0) AS nome_nebulosa_mais_frequente_1,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN nebulosa n ON eu.fKNebulosa = n.idNebulosa 
    WHERE n.nome = nome_nebulosa_mais_frequente_1) AS frequencia_nebulosa_mais_frequente_1,

    (SELECT n.nome FROM nebulosa n 
    INNER JOIN escolhaUsuario eu ON n.idNebulosa = eu.fKNebulosa 
    GROUP BY n.nome 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 1) AS nome_nebulosa_mais_frequente_2,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN nebulosa n ON eu.fKNebulosa = n.idNebulosa 
    WHERE n.nome = nome_nebulosa_mais_frequente_2) AS frequencia_nebulosa_mais_frequente_2,

    (SELECT n.nome FROM nebulosa n 
    INNER JOIN escolhaUsuario eu ON n.idNebulosa = eu.fKNebulosa 
    GROUP BY n.nome 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 2) AS nome_nebulosa_mais_frequente_3,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN nebulosa n ON eu.fKNebulosa = n.idNebulosa 
    WHERE n.nome = nome_nebulosa_mais_frequente_3) AS frequencia_nebulosa_mais_frequente_3,

    (SELECT g.nome FROM galaxia g 
    INNER JOIN escolhaUsuario eu ON g.idGalaxia = eu.fkGalaxia 
    GROUP BY g.nome 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 0) AS nome_galaxia_mais_frequente_1,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN galaxia g ON eu.fkGalaxia = g.idGalaxia 
    WHERE g.nome = nome_galaxia_mais_frequente_1) AS frequencia_galaxia_mais_frequente_1,

    (SELECT g.nome FROM galaxia g 
    INNER JOIN escolhaUsuario eu ON g.idGalaxia = eu.fkGalaxia 
    GROUP BY g.nome 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 1) AS nome_galaxia_mais_frequente_2,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN galaxia g ON eu.fkGalaxia = g.idGalaxia 
    WHERE g.nome = nome_galaxia_mais_frequente_2) AS frequencia_galaxia_mais_frequente_2,

    (SELECT g.nome FROM galaxia g 
    INNER JOIN escolhaUsuario eu ON g.idGalaxia = eu.fkGalaxia 
    GROUP BY g.nome 
    ORDER BY COUNT(*) DESC 
    LIMIT 1 OFFSET 2) AS nome_galaxia_mais_frequente_3,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
    INNER JOIN galaxia g ON eu.fkGalaxia = g.idGalaxia 
    WHERE g.nome = nome_galaxia_mais_frequente_3) AS frequencia_galaxia_mais_frequente_3,

    (SELECT p.nome FROM planeta p 
     INNER JOIN escolhaUsuario eu ON p.idPlaneta = eu.fkPlaneta 
     GROUP BY p.nome 
     ORDER BY COUNT(*) DESC 
     LIMIT 1 OFFSET 0) AS nome_planeta_mais_frequente_1,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
     INNER JOIN planeta p ON eu.fkPlaneta = p.idPlaneta 
     WHERE p.nome = nome_planeta_mais_frequente_1) AS frequencia_planeta_mais_frequente_1,

    (SELECT p.nome FROM planeta p 
     INNER JOIN escolhaUsuario eu ON p.idPlaneta = eu.fkPlaneta 
     GROUP BY p.nome 
     ORDER BY COUNT(*) DESC 
     LIMIT 1 OFFSET 1) AS nome_planeta_mais_frequente_2,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
     INNER JOIN planeta p ON eu.fkPlaneta = p.idPlaneta 
     WHERE p.nome = nome_planeta_mais_frequente_2) AS frequencia_planeta_mais_frequente_2,

    (SELECT p.nome FROM planeta p 
     INNER JOIN escolhaUsuario eu ON p.idPlaneta = eu.fkPlaneta 
     GROUP BY p.nome 
     ORDER BY COUNT(*) DESC 
     LIMIT 1 OFFSET 2) AS nome_planeta_mais_frequente_3,
    (SELECT COUNT(*) FROM escolhaUsuario eu 
     INNER JOIN planeta p ON eu.fkPlaneta = p.idPlaneta 
     WHERE p.nome = nome_planeta_mais_frequente_3) AS frequencia_planeta_mais_frequente_3;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
};
