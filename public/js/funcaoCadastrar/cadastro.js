function cadastrar (cliente, verifica, banco) {
	if (cliente.tipo == 'paciente') {
		if (verifica.cadastrarPaciente(cliente)) {
			// cadastrar o paciente
			banco.salvaPaciente(cliente, function (error, result) {
				if (error) {
					console.log(error)
					return 'Erro ao cadastrar usuário';
				} else {
					console.log(result)
					return 'Paciente com sucesso';
				}
				
			});
		}
	} else if (cliente.tipo == 'clinica') {
		if (verifica.cadastrarClinica(cliente)) {
			// cadastrar a clinica
			banco.salvaClinica(cliente, function (error, result) {
				if (error) {
					console.log(error)
					return 'Erro ao cadastrar usuário';
				} else {
					console.log(result)
					return 'Clinica cadastrada com sucesso';
				}
			});
		}
	} else if (cliente.tipo == 'medico') {
		if (verifica.cadastrarMedico(cliente)) {

			// Cadastrar médico
			banco.salvaMedico(cliente, function (error, result) {
				if (error) { console.log(error) } else { console.log(result) }
				return
			});
		}
	}
}

module.exports = {cadastrar};