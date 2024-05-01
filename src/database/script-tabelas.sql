-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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
titulo varchar(255),
descricao varchar(255),
dtPublic date,
fkUsuario int,
constraint fkPostUsuario foreign key (fkUsuario) references usuario(id));

desc comentario;

select * from comentario;

select * from comentario;

        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id;