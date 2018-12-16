class colocaDados {
	perfilPaciente () {
		if (document.querySelector('#dadosUser').classList == 'default') {
			var foto = document.querySelector('#foto_user');
			var nome = document.querySelector('#nome');
			var telefone = document.querySelector('#telefone');
			var cpf = document.querySelector('#cpf');
			var sus = document.querySelector('#sus');
			var email = document.querySelector('#email');
			var user = firebase.auth().currentUser;
			
			if (user.photoURL != null) {
				foto.src = `${user.photoURL}`;
			}
			nome.innerHTML += user.displayName;
			telefone.innerHTML += user.telefone;
			cpf.innerHTML += user.cpf;
			sus.innerHTML += user.sus;
			email.innerHTML += user.email;
			document.querySelector('#dadosUser').classList = 'altered';
		}
	}

	alterarDadosPaciente () {
		let foto = document.querySelector('#foto');
		let nome = document.querySelector('[name = nome]');
		let email = document.querySelector('[name = email]');
		let cpf = document.querySelector('[name = cpf]');
		let sus = document.querySelector('[name = sus]');
		let cf = document.querySelector('[name = cartao-familia]');
		let user = firebase.auth().currentUser;

		if (user.photoURL != null) {
			foto.src = `${user.photoURL}`;
		}
		nome.value = user.displayName;
		email.value = user.email;
		cpf.value = user.cpf;
		sus.value = user.sus;
		cf.value = user.cf;
	}

	perfilClinica () {}

	alterarDadosClinica () {}
}

module.exports = function () {
	return colocaDados;
}