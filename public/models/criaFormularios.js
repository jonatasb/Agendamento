class formularios {
	criaEspecialidades (especialidades) {
		var part1 = document.querySelector('#part1');
		part1.innerHTML = "";
		especialidades.forEach((especialidade) => {
			part1.innerHTML += `<div class="card card-especialidade" name="${especialidade.nome}">
					<label>${especialidade.nome}</label>
					<p>${especialidade.descricao}</p>
				</div>`;
		});
	}

	criaClinicas (clinicas) {
		var part2 = document.querySelector('#part2');
		part2.innerHTML = "";
		clinicas.forEach((clinica) => {
			part2.innerHTML += `<div class="card card-clinicas" name="${clinica.nome}">
					<label>${clinica.nome}</label>
					<img src="${clinica.photoUrl}" alt="Foto da Clínica" />
				</div>`;
		});
		document.querySelector('#part1').classList = 'esconde';
		part2.classList = 'mostra';
	}

	criaMedicos (medicos) {
		var part3 = document.querySelector('#part3');
		part3.innerHTML = "";
		medicos.forEach((medico) => {
			part3.innerHTML += `<div class="card card-medicos" name="${medico.nome}">
					<label>${medico.nome}</label>
					<img src="${medico.photoUrl}" alt="Foto do Médico" />
				</div>`;
		});
		document.querySelector('#part2').classList = 'esconde';
		part3.classList = 'mostra';
	}

	criaCalendario (agenda) {
		var part4 = document.querySelector('#part4');
		part4.innerHTML = "";
		part4.innerHTML = `<label>Data</label>
				<input type="date" name="data" min="${pegaDataHoje()}" />`;
		part4.classList = 'mostra';
	}

	criaHorarios (data) {
		var part5 = document.querySelector('#part5');
		part5.innerHTML = "";
		part5.innerHTML = `<label>Horário</label>
				<select id="horarios">
					<option selected disabled value="default">Selecione o horário desejado</option>
				</select>`;
		part5.classList = 'mostra';
	}
}

module.exports = function () {
	return formularios;
}