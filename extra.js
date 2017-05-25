const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const enviar = require('./mensajes.js');

exports.evaluacion = function(senderID,texto){
	if(texto=='Problema 1'){
		mensaje='¿Porqué es un bucle infinito?';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/Nf30Omn.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='Problema 2'){
		mensaje='¿Que arroja este programa?';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/q1aDlkN.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else if(texto=='Problema 3'){
		mensaje='¿Porque no compila este programa?';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/Gbkc3Pv.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
		else if(texto=='Problema 4'){
		mensaje='¿Cuantas veces se imprime “hola mundo”?';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/DJfQ7KJ.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
		else if(texto=='Problema 5'){
		mensaje='¿Qué está mal en este código?';
		enviar.enviarMensajeTexto(senderID,mensaje);
		url='http://i.imgur.com/N2kdzYB.png';
		enviar.enviarMensajeImagen(senderID,url);
	}
	else{
		return false;
	}
}


exports.recErrores = function(senderID,texto){
	if(texto=='9 cr.c:23:2: Error: too few arguments to funtion ‘función’'){
		mensaje = 'Falta agregar parámetros  tu función.';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:21:2: Error: expected ‘;’ before ‘scanf’'){
		mensaje = 'Falta punto y coma antes de:__';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: ‘numero’ undeclared (first use in this function)'){
		mensaje = 'La variable no se ha declarado.';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: implicit declaration of function ‘función’ [–Wimplicit-function-declaration]'){
		mensaje = 'No se ha declarado la función';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: unterminted comment'){
		mensaje = 'comentario abierto y no terminado';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: data definition has no type or storage class'){
		mensaje = 'No tiene tipo de almacenamiento';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: type defaults to ‘int’ in declaration of ‘x’'){
		mensaje = 'Variable no declarada';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: expected ‘)’ before ‘{‘ token'){
		mensaje = 'Falta un paréntesis antes de seguir';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: expected expression before ‘:’'){
		mensaje = 'Se espera una expresión antes de ‘;’';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
	else if(texto=='9 cr.c:23:2: Error: missing terminating “ character'){
		mensaje = 'Falta el carácter de terminación “';
		enviar.enviarMensajeTexto(senderID,mensaje);
	}
}