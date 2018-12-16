// Função que coloca as especialidades que estão cadastradas no banco de dados na tag Select

function colocaEspecialidades () {
	var buscarNoBanco = new buscaDadosNoBanco();
	var especialidades = buscarNoBanco.pegaEspecialidades();

	var select = document.querySelector('#especialidades');
	especialidades.forEach(function (especialidade) {
		select.innerHTML += `<option class="opcao" value="${especialidade}">${especialidade}</option>`;
	}); 
}