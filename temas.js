const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const enviar = require('./mensajes.js');

//Tipos de estructuras de control
exports.tiposEstructuras = function(senderID,texto){
	if(texto=='if-else'){
		mensaje='Se utiliza para expresar decisiones. Y su estructura es:';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/RtDFEo5.png';
		enviar.enviarMensajeImagen(senderID,url);

	}
	else if(texto== 'else-if'){
		mensaje='Se utiliza para expresar decisiones. Y su estructura es:';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/LdrDkQx.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='switch'){
		mensaje='Nos permite ejecutar un bloque de código u otro dependiendo del valor de una variable y traslada el control adecuadamente.\n Si un case coincide con el valor de la expresión solicitada, la ejecución comienza allí. Todas las expresiones case deben ser diferentes. El etiquetado como default se ejecuta si ninguno de los otros satisface la expresión, puede omitirse. Estructura:';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/35Dg7Hn.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='ciclos'){
		mensaje='Los ciclos -while,for, do while- nos permiten utilizar una condición para determinar cuántas veces queremos ejecutar una instrucción.';
		enviar.enviarMensajeTexto(senderID,mensaje)
		url='http://i.imgur.com/QFsaRfH.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else{
		return false;
	}
}

//Variables
exports.variables = function(senderID,texto){
	if(texto=='variables'){
		mensaje='Es simplemente el nombre que se le da a la zona de almacenamiento que nuestros programas pueden manipular.';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto== 'tipos de variables'){
		url='http://i.imgur.com/ncqgRv1.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='declaración de variables' || texto=='declaración de varia...'){
		mensaje='Todas las variables deben ser declaradas antes de poder ser utilizadas, siguiendo la siguiente secuencia:\n “Tipo de variable”\n “nombre de la variable”\n “nombre de otra variable (si es necesario)”.';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://imgur.com/h9MjjEP';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='inicializar variables' || texto=='inicializar variable...'){
		mensaje='La inicialización de una variable consiste en darle un valor a esa variable antes de usarla, de lo contrario, solo te guardara basura. Se pueden inicializar una o varias veces dependiendo de lo que necesites en tu programa.';
		enviar.enviarMensajeTexto(senderID,mensaje)
	}
	else if(texto=='variables globales'){
		mensaje='Una variable global es aquella que se define fuera del cuerpo de cualquier función, normalmente al principio del programa. El ámbito de una variable global son todas las funciones que componen el programa, cualquier función puede acceder a dichas variables para leer y escribir en ellas.';
		enviar.enviarMensajeTexto(senderID,mensaje)
	}
	else if(texto=='variables locales'){
		mensaje='Una variable local es aquella cuyo ámbito se restringe a la función que la ha declarado. Esto implica que esa variable solo va a poder ser manipulada en dicha sección, y no se podrá hacer referencia fuera de dicha sección.';
		enviar.enviarMensajeTexto(senderID,mensaje)
	}
	else{
		return false;
	}
}

//Datos Primitivos
exports.tiposDeDatosPrimitivos = function(senderID, texto){
	if(texto=='Enteros'){
		mensaje=' Su palabra reservada es ‘int’. Tiene varios modificadores que están en la siguiente tabla. Especificador de formato “%d”.';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/GPoCzl1.jpg';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='De punto flotante'){
		 mensaje=' Son reales , sus palabras reservadas son ‘float/double’ . Tienen un número de precision además del rango. Sus modificadores son long. Especificador de formato “%f”.';
	 	enviar.enviarMensajeTexto(senderID,mensaje);
	 	url='http://i.imgur.com/QDsmqdT.jpg';
	 	enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='Caracter'){
		mensaje=' Su palabra reservada es ‘char’. Internamente los caracteres se almacenan como números. Además si se utilizar ‘char’ en la estructura array se puede utilizar para almacenar cadenas de caracteres. Especificador de formato “%c” y cuando se utilizar como array “%s”';
		enviar.enviarMensajeTexto(senderID,mensaje);
    	url='http://i.imgur.com/a0hvCgd.jpg';
    	enviar.enviarMensajeImagen(senderID,url);
	}
	else{
		return false
	}
}

//Operadores
exports.operadores = function(senderID,texto){
	if(texto=='aritméticos'){
		mensaje='sirven para hacer operaciones básicas, como suma, resta, producto, división y modulo';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/jBNhb4x.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto== 'de relación y lógicos' || texto=='de relación y lógico...'){
		mensaje='son utilzados para hacer evaluaciones y comparaciones a variables ';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/uQ427Za.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='incremento y decremento' || texto=='incremento y decreme...'){
		mensaje='El lenguaje c proporciona dos operadores para incrementar y decrementar variables. se utiliza como prefijo o posfijo';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/c5wDDJR.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto== 'de asignación y expresiones' || texto == 'de asignación y expr...'){
		mensaje='Las expresiones tales como i=i+2 pueden reducirse a i+=2. El operador += se llama operador de asignación.';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/whDmB9X.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto== 'condicionales, ternario' || texto=='condicionales, terna...'){
		mensaje='“?:”, proporciona una forma alternativa para escribir un if que tenga solo una condicion y otras construcciones semejantes en la expresión. forma de escribir: expr1 ? expr2: expr3';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/XCISjxk.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto== 'precedencia y orden de evaluación' || texto=='precedencia y orden ...'){
		mensaje='la procedencia en los operadores es importante, debido a que las operaciones seran echas dependiendo a la precedencia de cada operador. tabla de precedencia:';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/srBKREQ.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else{
		return false;
	}
}

//Expresiones
exports.expresiones = function(senderID,texto){
	if(texto=='proposiciones'){
		mensaje='una expresión como x=0 ó i++ o printff(...) se convierte en proposición cuando va seguido un punto y coma, como x=0; i++;';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	
	else if(texto=='expresiones aritméticas' || texto=='expresiones aritméti...'){
		mensaje='son aquellas operaciones que puede estar conformado por una varible, operadores y constantes, ejemplo: n+1, n*3, i++';
		enviar.enviarMensajeTexto(senderID,mensaje)
	}

	else{
		return false;
	}
}

//Bibliotecas
exports.bibliotecas = function(senderID,texto){
	if(texto=='Significado'){
		mensaje='Las bibliotecas son archivos (no siempre externos) que nos permiten llevar a cabo diferentes tareas sin necesidad de preocuparnos por cómo se hacen sino simplemente entender cómo usarlas. Las librearías en C permiten hacer nuestros programas más modulares y reutilizables, facilitando además crear programas con funcionalidades bastante complejas en unas pocas líneas de código.';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='sintaxis'){
		mensaje='La declaración de librerías se debe hacer al principio de todo nuestro código, antes de la declaración de cualquier función o línea de código, debemos indicarle al compilador que librerías usar, para el saber que términos estarán correctos en la escritura de nuestro código y cuáles no. La sintaxis es la siguiente: #include<nombre de la librería>. Ejemplo:';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://imgur.com/3oTjBqt';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='bibliotecas importantes' || texto=='bibliotecas importan...'){
		mensaje='Estas son algunas de las bibliotecas que mas usaras por ahora.';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/3VIraJr.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else{
		return false;
	}
}


exports.estructuraC = function(senderID, texto){
	var mensaje='';
	mensaje = 'La estructura basica en C consiste en el siguiente orden:\n1° Declaración de bibliotecas.\n2° Declaración de funciones.\n3° Bloque main.\n4° Definición de las Funciones\n\n\n';
	enviar.enviarMensajeTexto(senderID,mensaje);
	mensaje = 'Por ultimo, en cualquier punto del programa, se pueden colocar comentarios que no afectaran el desarrollo del progrma. Una forma de declararlo es con /* para iniciar y */ para terminarlo\nEjemplo:';
	enviar.enviarMensajeTexto(senderID,mensaje);
	url = 'http://i.imgur.com/lZlMvwb.png'
	enviar.enviarMensajeImagen(senderID,url);
}