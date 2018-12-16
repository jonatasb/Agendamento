function press (name) {
	if (name === 'pacienteCadastro') {
		document.querySelector('[name = pacienteCadastro]').classList = 'btn-pressed';
		document.querySelector('[name = clinicaCadastro]').classList = 'btn';
		document.querySelector('#cadastroPaciente').classList = 'login-form mostra';
		document.querySelector('#cadastroClinica').classList = 'login-form esconde';
	}
	if (name === 'clinicaCadastro') {
		document.querySelector('[name = clinicaCadastro]').classList = 'btn-pressed';
		document.querySelector('[name = pacienteCadastro]').classList = 'btn';
		document.querySelector('#cadastroPaciente').classList = 'login-form esconde';
		document.querySelector('#cadastroClinica').classList = 'login-form mostra';
	}
}