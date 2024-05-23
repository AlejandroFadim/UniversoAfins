var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/viagemController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserir", function (req, res) {
    usuarioController.inserir(req, res);
})

module.exports = router;