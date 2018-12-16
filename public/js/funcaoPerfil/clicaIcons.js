$('#settingsBtn').click(function () {
	$('#config').css('display', 'block').width('100%');
	$('#telaPrincipal').css('display', 'none');
	return false;
});

$('#volta').click(function () {
	$('#telaPrincipal').css('display', 'block').width('100%');
	$('#config').css('display', 'none');
	return false;
});

$('#contaConfig').click(function () {
	window.location.href = '/atualizarDados';
});

$('#ajudaConfig').click(function () {
	window.location.href = '/ajuda';
});

$('#sair').click(function () {
	window.location.href = '/deslogar';
});