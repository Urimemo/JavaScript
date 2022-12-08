const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for(i = 0; i< 6; i++) {

	const item = document.createElement("LI");
	const texto = document.createTextNode("Hola soy uriol");

	item.appendChild(texto);
	fragmento.appendChild(item);

}

contenedor.appendChild(fragmento);
console.log(contenedor);

