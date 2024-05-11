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

drop table comentario;
create table comentario (
id int primary key auto_increment,
urlArtigo varchar(45),
titulo varchar(255),
descricao varchar(255),
dtPublic date,
fkUsuario int,
constraint fkPostUsuario foreign key (fkUsuario) references usuario(id));

desc comentario;

select * from comentario;

truncate comentario;
use aquatech;

select * from usuario;
SELECT nome, email FROM usuario WHERE email = 'junior@gmail.com' AND senha = '123';



select * from comentario;

SELECT a.id AS idAviso, a.titulo, a.descricao, a.fk_usuario, u.id AS idUsuario, u.nome, u.email, u.senha FROM aviso a INNER JOIN usuario u ON a.fk_usuario = u.id WHERE u.id = ${idUsuario};