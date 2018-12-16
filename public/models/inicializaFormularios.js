class InicializaFormularios {
	constructor (formularios, banco) {
		this.formularios = formularios;
		this.banco = banco;
		this.consulta = {};
	}

	InicializaEspecialidades () {
		this.formularios.criaEspecialidades(this.banco.pegaEspecialidades(function (error, result) {
			if (error) { console.log(error); } else { console.log(result); }
		}));
		this.InicializaClinicas();
	}

	InicializaClinicas () {
		var especialidades = document.querySelectorAll('.card-especialidade');
		especialidades.forEach(especialidade => {
			especialidade.addEventListener('click', () => {
				this.consulta.especialidade = especialidade.name;
				especialidade.classList.add('selecionado');
				this.formularios.criaClinicas(this.banco.pegaClinicas(especialidade.name, function (error, result) {
					if (error) { console.log(error); } else { console.log(result); }	
				}));
			});
		});	
		this.InicializaMedicos();
	}

	InicializaMedicos () {
		var clinicas = document.querySelectorAll('.card-clinicas');
		clinicas.forEach(clinica => {
			clinica.addEventListener('click', () => {
				this.consulta.clinica = clinica.name;
				clinica.classList.add('selecionado');
				this.formularios.criaMedicos(this.banco.pegaMedicosPelaClinica(clinica.name, function (error, result) {
					if (error) { console.log(error); } else { console.log(result); }	
				}));
			});
		});
		this.InicializaCalendario();
	}

	InicializaCalendario () {
		var medicos = document.querySelectorAll('.card-medicos');
		medicos.forEach(medico => {
			medico.addEventListener('click', () => {
				this.consulta.medico = medico.name;
				medico.classList.add('selecionado');
				this.formularios.criaCalendario(this.banco.pegaAgenda(medico.name, this.consulta.clinica, this.consulta.especialidade, function (error, result) {
					if (error) { console.log(error); } else { console.log(result); }	
				}));
			});
		});
	}
}

module.exports = function () {
	return InicializaFormularios;
}