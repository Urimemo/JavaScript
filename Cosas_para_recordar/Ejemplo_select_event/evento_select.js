// input de tipo texto
const input = document.querySelector(".caja");
//contenedor div con class="texto"
const texto = document.querySelector(".texto");

input.addEventListener("select", (e)=> {
	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let nuevoTexto = input.value;

	texto.innerHTML = nuevoTexto.substring(start, end);
});
