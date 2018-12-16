function pegaDataHoje () {
	var date = new Date();
	var dia = date.getDate();
	var mes = date.getMonth();
	var ano = date.getFullYear();
	return new Date(ano+'-'+mes+'-'+dia);
}

module.exports = {pegaDataHoje};