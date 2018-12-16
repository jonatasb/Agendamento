var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/agendamento";


function database(connect){
	var conexao = new pg.Client(conString);
	return conexao.connect(connect);
}

module.exports = {database}