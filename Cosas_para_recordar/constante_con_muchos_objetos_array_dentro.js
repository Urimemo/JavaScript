// class Calculadora{
// 	constructor(operacion,num1,num2){
// 		this.op = operacion;
// 		this.num1 = num1;
// 		this.num2 = num2;

// 		this.resultado = null;
// 	}

// 	operacion(){

// 		if(this.op ==1){

// 			this.resultado == parseFloat(num1) + parseFloat(num2);
// 			document.write(`${this.resultado}`);


// 		} else if(this.op == 2) {

// 			this.resultado = parseFloat(num1) - parseFloat(num2);
// 			document.write(`${this.resultado}`);


// 		} else if(this.op == 3) {

// 			this.resultado = parseFloat(num1) * parseFloat(num2);
// 			document.write(`${this.resultado}`);


// 		} else if(this.op == 4) {

// 			this.resultado = parseFloat(num1) / parseFloat(num2);
// 			document.write(`${this.resultado}`);


// 		}
// 	}

// 	impResultado(){
		
// 	}
// }

// let operacion = prompt("Que operacion quieres: <br> 1. suma <br> 2. resta <br> 3. multiplicacion <br> 4. division");
// let num1 = prompt("Numero 1:");
// let num2 = prompt("Numero 2:");

// const calculadora = new Calculadora(operacion,num1,num2);

// calculadora.operacion();

let numRandom = () => Math.round(Math.random()*100);

const constSubjects = {
	fisica:[numRandom(), numRandom(), numRandom(), "Fisica"],
	quimica:[numRandom(), numRandom(), numRandom(), "Quimica"],
	programacion:[numRandom(), numRandom(), numRandom(), "Programación"],
	pedorración:[numRandom(), numRandom(), numRandom(), "Pedorración"],
	putrefacción:[numRandom(), numRandom(), numRandom(), "putrefacción"]
}

const constAsistencias = () => {

	for (i in constSubjects) {
		let asistencias = constSubjects[i][0];

		console.log(`${constSubjects[i][3]} con ${constSubjects[i][0]} asistencias`);
		
		if (asistencias > 75) {
			console.log("%cAprobado", "color: green");
		} else {
			console.log("%cSuspendido", "color: red");
		}
	}

}

constAsistencias();
