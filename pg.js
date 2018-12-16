let consign = require('consign');
let bodyParser = require('body-parser');
let express = require('express');
let session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('views', './public/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(session(
	{'secret': 'be0f2a79247da56dc79d7197a2ae439a',
	 'resave': false,
	 saveUninitialized: true
	}
));


consign()
	.include('./public/routes')
	.then('./public/connectPg.js')
	.then('./public/models')
	.then('./public/js/funcaoCadastrar/cadastro.js')
	.then('./public/js/funcaoLogar/login.js')
	.then('./public/js/funceosAjuda/pegaDataHoje.js')
	.into(app);

module.exports = app;