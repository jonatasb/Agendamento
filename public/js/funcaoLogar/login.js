function logar (dados, verifica, banco) {
	if (verifica.login(dados)) {
		let email = dados.emailLogin;
		let senha = dados.senhaLogin;
		if (error === "There is no user record corresponding to this identifier. The user may have been deleted.") {
			try {
				var resultado = banco.achaPaciente(email, senha, function (error, result) {
					if (error) {
						console.log(error);
					} else {
						console.log(result);
					}
				});
				if (resultado == 'email nao cadastrado') {
					throw 'E-mail não foi cadastrado';
				} else if(resultado == 'senha errada') {
					throw 'A senha está errada';
				}
			} catch (err) {
				alert(err);
			}
		}
	}
}

module.exports = {logar};