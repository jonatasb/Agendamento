var input = document.querySelector('[name = escolherFoto]');

input.addEventListener('input', (evt) => {
	var path = URL.createObjectURL(evt.target.files[0]);
	$('.fotoAtualizar').attr('src', path);


	var file = evt.target.files[0];
	console.log(file.name);

	var storageRef = firebase.storage().ref('teste/zorão.jpg');
	var task = storageRef.put(file);


	task.on('state_changed', 
		function progress (snapshot) {
			var percentage = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
		}, 

		function error (err) {
			alert(err)
		},

		function complete () {
			console.log('Completado')

		}

	);
	return
});