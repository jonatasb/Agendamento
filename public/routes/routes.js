module.exports = function(app){	

// GET

	app.get('/', function (req, res) {
		if (req.session.auth) {
			res.redirect('/perfil');
		} else {
			res.render("index.ejs");
		}
	});

	app.get('/cadastro', function (req, res) {
		res.render("cadastro.ejs");
	});

	app.get('/perfil', function (req, res) {
		//verifica se há um user logado
		if (req.session.auth) {
			res.render('telaPaciente.ejs');
			// if (req.session.user.tipo == 'paciente') {
			// 	res.render('telaPaciente.ejs');
			// } else  if (req.session.user.tipo == 'clinica') {
			// 	req.render('telaClinica.ejs');
			// }
		}
		// redireciona o user para a página dele se estivar logado
		//página de erro se n estiver logado
	});

	app.get('/cadastrarMedico', function (req, res) {
		res.render('cadastrarMedico.ejs');
	});

	app.get('/deslogar', function (req, res) {
		req.session.auth = false;
		res.redirect('/');
	});

	app.get('/marcarConsulta', function (req, res) {
		var connection = app.public.connectPg.database(function(error,client,done){
			var formularios = app.public.models.formularios;
			var banco = app.public.models.banco(client);
			var inicializa = app.public.models.InicializaFormularios(formularios, banco);
			inicializa.InicializaEspecialidades();
		});
	});

	app.get('/atualizarDados', function (req, res) {});

// POST

	app.post('/', function(req,res){
		var dados = req.body;
		var verifica = new app.public.models.verificaDados();
		app.public.connectPg.database(function (error, client, done) {
			var banco = new app.public.models.banco(client);
			var verificado = verifica.login(dados, banco);
			if (verificado[0] != null) {
				req.session.user = verificado[1];
				req.session.auth = true;

				console.log(req.session.user);
				res.redirect("/perfil");
			} else {
			}
		});	
	});

	app.post('/cadastro', function (req, res) {
		var dados = req.body;
		var verifica = new app.public.models.verificaDados();
		app.public.connectPg.database(function(error, client, done) {
			var banco = new app.public.models.banco(client);
			var msg = app.public.js.funcaoCadastrar.cadastro.cadastrar(dados, verifica, banco);

			console.log(msg);

			res.redirect('/');
		});
	});

	app.post('/cadastrarMedico', function (req, res) {
		var dados = req.body;
		var verifica = new app.public.models.verificaDados();
		app.public.connectPg.database( function (error, client, done) {
			var banco = new app.public.models.banco(client);
			dados.tipo = 'medico';
			// dados.id_clinica = req.session.user.idUser;
			var msg = app.public.js.funcaoCadastrar.cadastro.cadastrar(dados, verifica, banco);
			console.log(msg);
			res.redirect('/perfil');
		});
	});

	app.post('/marcarConsulta', function (req, res) {
		var dados = req.body;
		var connection = app.public.connectPg.database(function(error, client, done) {
			var banco = app.public.models.banco(client);
			banco.salvaConsulta(dados, function (error, result) {
				if (error) { console.log(error) } else { console.log(result) }
				return
			});

			res.redirect('/paciente')
		});
	});
}