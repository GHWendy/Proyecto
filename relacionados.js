const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var contador;


//Relacionados con saludo
exports.saludosRelacionados=function(texto){
	var saludos = ['Hola', 'ola','hola', 'ayudame'];
	for(contador=0;contador<saludos.length;contador++){
		if(siContiene(texto, saludos[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con lo principal: Menú, Temas.
exports.menuRelacionados = function(texto){
	var menu = ['menu','menú','Menu', 'Ayuda'];
	for(contador=0;contador<menu.length;contador++){
		if(siContiene(texto, menu[contador])){
			return true;
			break;
		}
	}
	return false;
}

exports.temasRelacionados = function(texto){
	var temas = ['temas','recomiendame'];
	for(contador=0;contador<temas.length;contador++){
		if(siContiene(texto, temas[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Estructuras de Control.
exports.estructuraRelacionados= function(texto){
	var estructura = ['Estructuras de contr...','estructuras de control','estrutura control','Estructuras de control','Estructura Control','if-else', 'else-if','switch','ciclos'];
	for(contador=0;contador<estructura.length;contador++){
		if(siContiene(texto, estructura[contador])){
			return true;
			break;
		}
	}
	return false;
}


exports.tiposEstructuraRelacionados =function(texto){
	var tiposEstructuras = ['if-else', 'else-if','switch','ciclos'];
	for(contador=0;contador<tiposEstructuras.length;contador++){
		if(siContiene(texto, tiposEstructuras[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Variables.
exports.variablesRelacionados= function(texto){
	var variables = ['Variable', 'varable', 'variable','VARIABLES','VARIABLES','variabl','vriable','tipos de variables','Tipos de variables', 'declaración de varia...', 'declaración de variables','inicializar variable...','inicializar variables', 'variables globales', 'Variables globales', 'variables locales','Variables locales'];
	for(contador=0;contador<variables.length;contador++){
		if(siContiene(texto, variables[contador])){
			return true;
			break;
		}
	}
	return false;
}


exports.subVarRelacionados = function(texto){
	var variables =['tipos de variables','Tipos de variables', 'declaración de varia...', 'declaración de variables','inicializar variable...','inicializar variables', 'variables globales', 'Variables globales', 'variables locales','Variables locales'];
	for(contador=0;contador<variables.length;contador++){
		if(siContiene(texto, variables[contador])){
			return true;
			break;
		}
	}
	return false;
}


//Relacionados con Datos Primitivos
exports.tiposDeDatosRelacionados = function(texto){
	var datos = ['tipos de datos ','tipos de dato primitivos', 'tipos de datos simples','datos primitivos', 'datos simples','Enteros', 'Enteros', 'De punto flotante','de punto flotantes', 'caracter', 'Caracter'];
	for(contador=0;contador<datos.length;contador++){
		if(siContiene(texto, datos[contador])){
			return true;
			break;
		}
	}
	return false;
}


exports.subDatosPriRelacionados = function(texto){
	var datos = ['Enteros', 'Enteros', 'De punto flotante','de punto flotantes', 'caracter', 'Caracter'];
	for(contador=0;contador<datos.length;contador++){
		if(siContiene(texto, datos[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Operadores
exports.operadoresRelacionados= function(texto){
	var operadores = ['Operadores aritmétic...','Operadores', 'operador', 'Operador','operadrs','opera', 'OPERADORES', 'OPERADOR', 'que es un operador','¿que es un operador?', 'que es un operador?','aritméticos', 'de relación y lógico...', 'de relación y lógicos', 'incremento y decreme...', 'incremento y decremento', 'de asignación y expr...','de asignación y expresiones', 'condicionales, ternario','condicionales, terna...', 'precedencia y orden ...', 'precedencia y orden de evaluación'];
	for(contador=0;contador<operadores.length;contador++){
		if(siContiene(texto, operadores[contador])){
			return true;
			break;
		}
	}
	return false;
}

exports.subOperadoresRelacionados= function(texto){
	var operadores = ['aritméticos', 'de relación y lógico...', 'de relación y lógicos', 'incremento y decreme...', 'incremento y decremento', 'de asignación y expr...','de asignación y expresiones', 'condicionales, ternario','condicionales, terna...', 'precedencia y orden ...', 'precedencia y orden de evaluación'];
	for(contador=0;contador<operadores.length;contador++){
		if(siContiene(texto, operadores[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Expresiones
exports.expresionesRelacionados =function(texto){
	var expresiones = ['expr','EXPRESIONES', 'EXPRESION','expresion', 'expresión', 'Expresiones', 'Expresion', 'Expresión','que es una expresion','¿que es una expresion?','que es una expresión?', '¿que son expresiones?','que son expresiones?', 'que son expresiones','proposiciones', 'Proposiciones', 'expresiones aritméti...', 'Expresiones aritméticas','expresiones aritméticas'];
	for(contador=0;contador<expresiones.length;contador++){
		if(siContiene(texto, expresiones[contador])){
			return true;
			break;
		}
	}
	return false;
}

exports.subExpresionesRelacionados = function(texto){
	var expresiones = ['proposiciones', 'Proposiciones', 'expresiones aritméti...', 'Expresiones aritméticas','expresiones aritméticas'];
	for(contador=0;contador<expresiones.length;contador++){
		if(siContiene(texto, expresiones[contador])){
			return true;
			break;
		}
	}
	return false;
}

function siContiene(texto, word){
	return texto.indexOf(word) > -1;
}

//Relacionados con Bibliotecas
exports.bibliotecasRelacionados= function(texto){
	var bibliotecas = ['bibliotcas', 'blibios', 'bibioteca','biblioteca','biblios','libreriras','librerias','Significado', 'sintaxis','Sintaxis de bibliotecas', 'bibliotecas importan...','bibliotecas importantes','Bibliotecas importantes'];
	for(contador=0;contador<bibliotecas.length;contador++){
		if(siContiene(texto, bibliotecas[contador])){
			return true;
			break;
		}
	}
	return false;
}

exports.subBibliotecasRelacionados= function(texto){
	var bibliotecas = ['Significado', 'sintaxis','Sintaxis de bibliotecas', 'bibliotecas importan...','bibliotecas importantes','Bibliotecas importantes'];
	for(contador=0;contador<bibliotecas.length;contador++){
		if(siContiene(texto, bibliotecas[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Evaluación
exports.evaluacionRelacionados= function(texto){
	var evaluacion = ['prueba','evaluación','Evaluacion','Problema 1','Problema 2', 'Problema 3','Problema 4','Problema 5'];
	for(contador=0;contador<evaluacion.length;contador++){
		if(siContiene(texto, evaluacion[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con Reconocimiento de Errores
exports.recErroresRelacionados= function(texto){
	var errores = ['Reconocimiento error...','reconocimiento de errores','9 cr.c:23:2: Error: too few arguments to funtion ‘función’','9 cr.c:21:2: Error: expected ‘;’ before ‘scanf’','9 cr.c:23:2: Error: ‘numero’ undeclared (first use in this function)',' cr.c:23:2: Error: implicit declaration of function ‘función’ [–Wimplicit-function-declaration]','9 cr.c:23:2: Error: unterminted comment','9 cr.c:23:2: Error: data definition has no type or storage class','9 cr.c:23:2: Error: type defaults to ‘int’ in declaration of ‘x’','9 cr.c:23:2: Error: expected ‘)’ before ‘{‘ token','9 cr.c:23:2: Error: expected expression before ‘:’9 cr.c:23:2: Error: missing terminating “ character'];
	for(contador=0;contador<errores.length;contador++){
		if(siContiene(texto, errores[contador])){
			return true;
			break;
		}
	}
	return false;
}


exports.ErroresRelacionados= function(texto){
	var errores=['9 cr.c:23:2: Error: too few arguments to funtion ‘función’','9 cr.c:21:2: Error: expected ‘;’ before ‘scanf’','9 cr.c:23:2: Error: ‘numero’ undeclared (first use in this function)',' cr.c:23:2: Error: implicit declaration of function ‘función’ [–Wimplicit-function-declaration]','9 cr.c:23:2: Error: unterminted comment','9 cr.c:23:2: Error: data definition has no type or storage class','9 cr.c:23:2: Error: type defaults to ‘int’ in declaration of ‘x’','9 cr.c:23:2: Error: expected ‘)’ before ‘{‘ token','9 cr.c:23:2: Error: expected expression before ‘:’9 cr.c:23:2: Error: missing terminating “ character'];
	for(contador=0;contador<errores.length;contador++){
		if(siContiene(texto, errores[contador])){
			return true;
			break;
		}
	}
	return false;
}

//Relacionados con despedida
exports.despedidaRelacionados=function(texto){
	var despedidas = ['adios', 'hasta luego','Gracias', 'increible'];
	for(contador=0;contador<despedidas.length;contador++){
		if(siContiene(texto, despedidas[contador])){
			return true;
			break;
		}
	}
	return false;
}