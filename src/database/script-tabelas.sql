-- create database universoAfins;
use universoAfins;
create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
;

insert into usuario values
(1 , 'alejandro', 'alejandro@gmail.com', '12345678', );

create table comentario (
id int primary key auto_increment,
urlArtigo varchar(45),
titulo varchar(255),
descricao varchar(255),
dtPublic date,
fkUsuario int,
constraint fkPostUsuario foreign key (fkUsuario) references usuario(id));

create table nebulosa (
idNebulosa int primary key,
nome varchar(45));

create table galaxia (
idGalaxia int primary key,
nome varchar(45));

create table planeta (
idPlaneta int primary key,
nome varchar(45));

insert into galaxia values
(1,'ESO137'),
(2,'NGC7496'),
(3,'NGC265'),
(4,'VV191');

insert into nebulosa values
(1,'Crab'),
(2,'Ring'),
(3,'Rho'),
(4,'Clas');

insert into planeta values
(1,'jupter'),
(2,'uranu'),
(3,'saturno'),
(4,'marte');

create table escolhaUsuario (
id int primary key auto_increment,
fkUsuario int,
fKNebulosa int,
fkGalaxia int,
fkPlaneta int,
foreign key (fkUsuario) references usuario(id),
foreign key (fKNebulosa) references nebulosa(idNebulosa),
foreign key (fkGalaxia) references galaxia(idGalaxia),
foreign key (fkPlaneta) references planeta(idPlaneta)
);

insert into escolhaUsuario (fkUsuario,fKNebulosa, fkGalaxia, fkPlaneta ) values
(1,4,3,4),
(1,4,3,4),
(1,4,3,4),
(1,4,3,4),
(1,1,1,1),
(1,1,1,1),
(1,1,1,1),
(1,1,1,1);

insert into escolhaUsuario (fkUsuario,fKNebulosa, fkGalaxia, fkPlaneta ) values
(1,4,3,4),
(1,2,3,2),
(1,2,3,2),
(1,2,3,2);

select * from usuario;

desc escolhaUsuario;

select * from comentario;


select * from usuario;
SELECT nome, email FROM usuario WHERE email = 'junior@gmail.com' AND senha = '123';



select * from comentario;



SELECT
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkUsuario = (SELECT fkUsuario FROM escolhaUsuario GROUP BY fkUsuario ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkUsuario,
    (SELECT n.nome FROM nebulosa n INNER JOIN escolhaUsuario eu ON n.idNebulosa = eu.fKNebulosa GROUP BY n.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_nebulosa_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fKNebulosa = (SELECT fKNebulosa FROM escolhaUsuario GROUP BY fKNebulosa ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fKNebulosa,
    (SELECT g.nome FROM galaxia g INNER JOIN escolhaUsuario eu ON g.idGalaxia = eu.fkGalaxia GROUP BY g.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_galaxia_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkGalaxia = (SELECT fkGalaxia FROM escolhaUsuario GROUP BY fkGalaxia ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkGalaxia,
    (SELECT p.nome FROM planeta p INNER JOIN escolhaUsuario eu ON p.idPlaneta = eu.fkPlaneta GROUP BY p.nome ORDER BY COUNT(*) DESC LIMIT 1) AS nome_planeta_mais_frequente,
    (SELECT COUNT(*) FROM escolhaUsuario WHERE fkPlaneta = (SELECT fkPlaneta FROM escolhaUsuario GROUP BY fkPlaneta ORDER BY COUNT(*) DESC LIMIT 1)) AS total_frequencia_fkPlaneta;
