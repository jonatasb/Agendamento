function pressNav (name) {
	if (name === 'perfil') {
		document.querySelector('[name = perfil]').classList = 'btn-pressed';
		document.querySelector('[name = consultas]').classList = 'btn';
		document.querySelector('#dadosUser').classList = 'mostra';
		document.querySelector('#consultas').classList = 'esconde';
	}
	if (name === 'consultas') {
		document.querySelector('[name = consultas]').classList = 'btn-pressed';
		document.querySelector('[name = perfil]').classList = 'btn';
		document.querySelector('#dadosUser').classList = 'esconde';
		document.querySelector('#consultas').classList = 'mostra';
	}
}