class VerificaDados {
	login (dados, banco) {
		var email = dados.emailLogin;
		var senha = dados.senhaLogin;

		try {
			// verificação dos dados
			if (email  == null) {
				throw 'Digite um E-mail válido'
			}
			if (senha == null || senha == ' ' || senha.length < 6) {
				throw 'Senha muito curta'
			}
			var paciente = banco.achaPaciente(email, senha, function (error, response) {
				if (error) {
					console.log(error);
					return 'Erro ao buscar usuário'
				} else {
					console.log(response.rows[0]);
					return response.rows[0];
				}
			});

			console.log(paciente);

			if (paciente == 'Erro ao buscar usuário') {
				throw 'Erro ao buscar usuário'
			}
			// if (paciente == undefined) {

			// 	console.log('mano que coisa mais chata que tá sendo fazer isso doido')
			// 	// var clinica  = banco.achaClinica(email, senha, function (error, response) {
			// 	// 	if (error) {
			// 	// 		return 'Erro ao buscar usuário'
			// 	// 	} else {
			// 	// 		return response;
			// 	// 	}
			// 	// });

			// 	// if (clinica == 'Erro ao buscar usuário') {
			// 	// 	throw 'Erro ao buscar usuário'
			// 	// }
			// 	// if (clinica == undefined) {
			// 	// 	throw 'Usuário não cadastrado'
			// 	// }


			// }

			if (paciente != undefined) {
				var user = {
					"idUser": paciente.id_usuario,
					"nome": paciente.nome_usuario,
					"email":  paciente.email_usuario,
					"senha": paciente.senha_usuario,
					"cpf": paciente.cpf_usuario,
					"sus": paciente.sus_usuario,
					"fone": paciente.fone_usuario,
					"tipo": "paciente"
				}
			}
			// } else {
			// 	var user = {
			//		"idUser": clinica.id_clinica,
			// 		"nome": clinica.nome_clinica,
			// 		"email":  clinica.email_clinica,
			// 		"senha": clinica.senha_clinica,
			// 		"cnpj": clinica.cnpj_clinica,
			// 		"endereco": clinica.endereco_clinica,
			// 		"tipo_clinica": clinica.tipo_clinica,
			// 		"tipo": "clinica"
			// 	}
			// }

			return [true, user];
		} catch (err) {
			//tratamento de erros
			console.log(err);
			return false;
		}
	}

	consulta (dados) {}

	cadastrarPaciente (dados) {
		var nome = dados.nome;
		var email = dados.email;
		var confirmEmail = dados.confirmEmail;
		var senha = dados.senhaCad;
		var confirmSenha = dados.confirmSenha;
		var cpf = dados.cpfCad;
		var sus = dados.susCad;

		try{
			// verificação dos dados
			if (nome.length < 3) {
				throw 'O nome é muito curto'
			}
			if (email != confirmEmail) {
				throw 'O email nos dois campos devem ser iguais'
			}
			if (senha.length < 6) {
				throw 'A senha digitad é muito curta, a senha deve ter pelo menos 6 caracteres';
			}
			if (senha !=confirmSenha) {
				throw 'A senha nos dois campos deve estar igual'
			}
			if (cpf == null /* Código pra confirmar o CPF */) {
				throw 'Digite um CPF válido'
			}
			if (sus == null /* Código para confirmar o número do SUS */) {
				throw 'Digite um número do SUS válido'
			}
			return true;
		} catch (err) {
			// tratamento de erros
			console.log(err);
			return false;
		}
	}

	cadastrarClinica (dados) {
		var nome = dados.nome;
		var email = dados.email;
		var confirmEmail = dados.confirmEmail;
		var senha = dados.senhaCad;
		var confirmSenha = dados.confirmSenha;
		var cnpj = dados.cnpj;

		try{
			// verificação dos dados
			if (nome.length < 3) {
				throw 'O nome é muito curto'
			}
			if (email != confirmEmail) {
				throw 'O email nos dois campos devem ser iguais'
			}
			if (senha.length < 6) {
				throw 'A senha digitada é muito curta, a senha deve ter pelo menos 6 caracteres';
			}
			if (senha != confirmSenha) {
				throw 'A senha nos dois campos deve estar igual'
			}
			if (cnpj == null /* Validar cnpj */) {
				throw 'Digite um CNPJ válido'
			}
			return true;
		} catch (err) {
			// tratamento de erros
			console.log(err);
			return false;
		}
	}

	cadastrarMedico (dados) {
		var nome = dados.nomeMedico;
		// var crm = dados.crm;
		// var especialidade = dados.especialidade;
		// var domingo = [dados.domingo, dados.manhaDomingo, dados.tardeDomingo];
		// var segunda = [dados.segunda, dados.manhaSegunda, dados.tardeSegunda];
		// var terca = [dados.terca, dados.manhaTerca, dados.tardeTerca];
		// var quarta = [dados.quarta, dados.manhaQuarta, dados.tardeQuarta];
		// var quinta = [dados.quinta, dados.manhaQuinta, dados.tardeQuinta];
		// var sexta = [dados.sexta, dados.manhaSexta, dados.tardeSexta];
		// var sabado = [dados.sabado, dados.manhaSabado, dados.tardeSabado];
		// var qtdePacientes = dados.nDePaciente;

		// if (domingo[0]) {} else {}

		try {
			if (nome.length < 3) {
				throw 'O nome é muito curto'
			}
			return true;
			
		} catch (err) {
			console.log(err);
			return false;
		}
	}

	atualizarPaciente (dados) {}

	atualizarClinica (dados) {}
}

module.exports = function() {return VerificaDados;}
