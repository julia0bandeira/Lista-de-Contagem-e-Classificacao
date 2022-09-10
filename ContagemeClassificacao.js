// -Se o número for par, escreva 'par' e o número correspondente.
// -Se o número for ímpar, escreva 'ímpar' e o número correspondente.
// -Se o número for zero, escreva 'zero' e o número correspondente.

let listaAlunos = ["Caio","Júlia","João","Larissa","Carlos"]; //caio é o 0.
//console.log(listaAlunos)

for (let index = 0; index < listaAlunos.length; index++) {
	//const element = array[index];
	console.log(index)
	if (index == 0) {
		console.log("zero localizado: " + listaAlunos[index])
	  } else if (index % 2 == 0) { 
		console.log("número par localizado: " + listaAlunos[index]) 
	} else {console.log("número ímpar localizado: " + listaAlunos[index])} 

	}
	//if (index % 2 != 0) { 
		//console.log("número impar localizado")//para achar os número ímpares	
	