create database universoAfins;
use universoAfins;
create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
cep varchar(45),
dtNasc date,
rua varchar(45),
bairro varchar(45),
uf char(2));

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
(1,'Eso137'),
(2,'Ngc7496'),
(3,'Ngc265'),
(4,'Vv191');

insert into planeta values
(1,'jupter'),
(2,'uranu'),
(3,'saturno'),
(4,'marte');


drop table escolhaUsuario;
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


select * from escolhaUsuario;

desc comentario;

select * from comentario;


select * from usuario;
SELECT nome, email FROM usuario WHERE email = 'junior@gmail.com' AND senha = '123';



select * from comentario;