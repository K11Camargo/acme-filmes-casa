const express = require ('funcao.js');
const { filmes } = require('./modulo/filmes');
const server = express();
const filmes = require(filmes)



server.listen(3000, () => {
    console.log('Servidor está funcionando')
});