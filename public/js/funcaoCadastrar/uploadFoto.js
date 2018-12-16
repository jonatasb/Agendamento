function uploadFoto () {
	var input = document.querySelector('[name = escolherFoto]');
	var file = input.target.files[0].name;

	var reference =	storageMedicos.child(file);
	var task = reference.put(file);

	task.on('state_changed', 
		function progress (snapshot) {
			var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			var div = document.querySelector('#carregamento');
			var p = document.querySelector('#porcentagem');
			div.style.height = '100vh';
			div.style.width = '100%';
			div.style.background = 'rgba(255, 255, 255, 0.8)';
			p.innerHTML = percentage;
			p.style.color = 'black';
		}, 

		function error (err) {
			var div = document.querySelector('#carregamento');
			var p = document.querySelector('#porcentagem');
			div.style.height = '100vh';
			div.style.width = '100%';
			div.style.background = 'rgba(255, 255, 255, 0.8)';
			p.innerHTML = 'Ocorreu um erro no upload da sua foto. <br /> Tente novamente.';
			p.style.color = 'red';
		},

		function complete () {
			var div = document.querySelector('#carregamento');
			var p = document.querySelector('#porcentagem');
			div.style.height = '100vh';
			div.style.width = '100%';
			div.style.background = 'rgba(255, 255, 255, 0.8)';
			p.innerHTML = 'Foto salva com sucesso!';
			p.style.color = '#3bd677';

			div.style.display = 'none';

		}

	);
}