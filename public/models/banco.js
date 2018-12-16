class Banco {
	constructor (connection) {
		this.connection = connection;
	}

//Função que pega as especialidades cadastradas no banco de dados e retorna um vetor com todas elas, sem repetição
	pegaEspecialidades (callback) {
		this.connection.query("select nome_especialidade from especialidade", callback);
	}

	pegaEspecialidadesUsadas (callback) {
		this.connection.query("select nome_especialidade from especialidade where id_especialidade in (select id_espec from med_espec)", callback)
	}

	pegaEspecialidadePeloNome (especialidade ,callback) {
		this.connection.query("select id_especialidade from especialidade where nome_especialidade = '"+especialidade+"'", callback);
	}

//Função que pega as clínicas cadastradas de acordo com a especialidade selecionada no banco de dados
// e retorna um vetor com todas elas, sem repetição
	pegaClinicas (especialidade, callback) {
		this.connection.query("select nome_clinica from clinica where id_clinica = (select id_cli from med_cli where id_med as (select id_med from med_espec where id_espec = (select id_especialidade from especialidade where nome_especialidade = '"+especialidade+"')))", callback);
	}

//Função que pega os médicos cadastrados em uma clínica de acordo com a especialidade dele
// e retorna um vetor, sem repetição
	pegaMedicosPelaClinica (clinica, especialidade, callback) {
		this.connection.query("select * from medico where id_medico as (select id_med from med_cli where id_cli = (select id_clinica from clinica where nome_clinica = '"+clinica+"')) and id_medico as (select id_med from med_espec where id_espec = (select id_especialidade from especialidade where nome_especialidade = '"+especialidade+"'))", callback);
	}

//Função que pega um médico específico de uma clínica pelo CRM
	pegaMedicoPeloCrmEPelaClinica (crm, clinica, callback) {
		this.connection.query("select * from medico where id_medico = (select id_med from med_cli where id_cli = (select id_clinica from clinica where nome_clinica = '"+clinica+"')) and crm = '"+crm+"'", callback);
	}

	pegaMedicoPeloNome (medico, callback) {
		this.connection.query("select id_medico from medico where nome_medico = '"+medico+"'");
	}

//Função que pega a agenda do médico e retorna um objeto com dias da semana que ele está disponível (ou datas)
// e com os horários dele pra cada dia da semana que ele está
	pegaAgenda (medico, callback) {
		this.connection.query("", callback);
	}

// Código que busca se um usuário está cadastrado
// Código pede email e senha e busca um usuário
// Retorna 'email nao cadastrado' se email nao for encontrado
// Retorna 'senha errada' se o email for encontrado mas a senha estiver errada
	achaPaciente (email, senha, callback) {
		this.connection.query("select * from usuario where email_usuario = '"+email+"' and senha_usuario = '"+senha+"'", callback);
	}

	achaClinica (email, senha, callback) {
		this.connection.query("select * from clinica where email_clinica = '"+email+"' and senha_clinica = '"+senha+"'", callback);
	}


// SALVAR NO BANCO DE DADOS

	salvaPaciente (obj, callback) {
		let nome = obj.nome;
		let email = obj.email;
		let senha = obj.senhaCad;
		let cpf = obj.cpfCad;
		let sus = obj.susCad;
		let fone = obj.fonePaciente;
		this.connection.query("insert into usuario (nome_usuario, cpf_usuario, email_usuario, senha_usuario, fone_usuario, sus_usuario) values ('"+nome+"', '"+cpf+"', '"+email+"', '"+senha+"', '"+fone+"', '"+sus+"')", callback);
	}	

	salvaClinica (obj, callback) {
		let nome = obj.nome;
		let email = obj.email;
		let senha = obj.senhaCad;
		let cnpj = obj.cnpj;
		let tipo = obj.tipo;
		let rua = obj.ruaCad;
		let numero = obj.numCad;
		let bairro = obj.bairroCad;
		this.connection.query("insert into clinica (nome_clinica, cnpj_clinica, endereco_clinica, tipo, email_clinica, senha_clinica) values ('"+nome+"', '"+cnpj+"', '"+rua+", "+numero+" - "+bairro+"', '"+tipo+"', '"+email+"', '"+senha+"')", callback);
	}

	salvaConsulta (obj, callback) {
		this.connection.query("insert into consulta (dia, hora, id_cli, id_med, id_usu) values ()", callback);
	}

	salvaMedico (obj, callback) {
		let nome = obj.nomeMedico;
		let especialidade = obj.especialidade;
		let crm = obj.crm;
		let foto = obj.escolherFoto;
		let qtde = parseInt(obj.nDePaciente);
		let domingo = [obj.domingo, obj.manhaDomingo, obj.tardeDomingo];
		let segunda = [obj.segunda, obj.manhaSegunda, obj.tardeSegunda];
		let terca = [obj.terca, obj.manahTerca, obj.tardeTerca];
		let quarta = [obj.quarta, obj.manhaQuarta, obj.tardeQuarta];
		let quinta = [obj.quinta, obj.manhaQuinta, obj.tardeQuinta];
		let sexta = [obj.sexta, obj.manhaSexta, obj.tardeSexta];
		let sabado = [obj.sabado, obj.manhaSabado, obj.tardeSabado];
		let agenda = [domingo, segunda, terca, quarta, quinta, sexta, sabado];
		this.connection.query("insert into medico (nome_medico, crm, agenda_medico, foto_medico, qtdPacientes_medico) values ('"+nome+"', '"+crm+"', '"+agenda+"', '"+foto+"', "+qtde+")", callback);
		// let id_espec = this.pegaEspecialidadePeloNome(especialidade, callback);l
		// let id_med = this.pegaMedicoPeloNome(medico, callback);
		// this.connection.query("insert into med_espec (id_med, id_espec) values ('"+id_med+"', '"+id_espec+"')", callback);
	}
}

module.exports = function () {
	return Banco;
}