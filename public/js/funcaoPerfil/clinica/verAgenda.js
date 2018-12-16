function mostraAgenda(crm, btnID) {
	var clinica = firebase.auth().currentUser;
	var buscaNoBanco = new buscaDadosNoBanco;
	var medico = buscaNoBanco.pegaMedicoPeloCrmEPelaClinica(crm, clinica);
	var card = $('#consultas:nth-child('+btnID+')');
	$(`#${card.id} figure`).animate({
		width: "100vw",
		height: "300px",
		top: "0",
		left: "0"
	}, 400);
}