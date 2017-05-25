const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

//QuickReplay del Menú.
exports.menuQuickreply = function(senderID){
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:'Tengo estas opciones por el momento:',
			quick_replies: [
			{
				content_type:"text",
				title:'Temas',
				payload:'temas'
			},
			{
				content_type:"text",
				title:'Evaluación',
				payload:'evaluación'
			},
			{
				content_type:"text",
				title:'Reconocimiento errores',
				payload:'reconocimiento_errores'
			}
			]
		}
	};
	return messageData;
}

//QuickReplay de Temas.
exports.temasQuickreply = function(senderID){
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text: 'Tengo estos temas que te pueden interesar:',
			quick_replies: [
			{
				content_type:"text",
				title:'Estructuras de control',
				payload:'def_estructuras_de_control'
			},
			{
				content_type:"text",
				title:'Variables',
				payload:'def_variables'
			},
			{
				content_type:"text",
				title:'Operadores aritméticos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_OPERADORES_ARITMÉTICOS'
			},
			{
				content_type:"text",
				title:'Datos primitivos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING'
			},
			{
				content_type:"text",
				title:'Expresiones en C',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_EXPRESIONES'
			},
			{
				content_type:"text",
				title:'Bibliotecas en C',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_BIBLIOTECAS '
			},
			{
				content_type:"text",
				title:'Estructura de C',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ESTRUCTURA_C '
			}
			]
		}
	};
	return messageData;
}

//QuickReplay de Estructuras de Control.
exports.estructurasQuickreply = function(senderID){
	mensaje='Las estructuras de control nos permiten controlar el flujo del programa: tomar decisiones, realizar acciones repetitivas, etc., dependiendo de unas condiciones se le proporcione.';
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\nAqui algunas estructuras de control:',
			quick_replies: [
			{
				content_type:"text",
				title:'if-else',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_IF-ELSE'
			},
			{
				content_type:"text",
				title:'else-if',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ELSE-IF'
			},
			{
				content_type:"text",
				title:'switch',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_SWITCH'
			},
			{
				content_type:"text",
				title:'ciclos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_CICLOS'
			}
			]
		}
	};
	return messageData;
}

//QuickReplay de Variables.
exports.variablesQuickreply = function(senderID){

	mensaje='Es simplemente el nombre que se le da a la zona de almacenamiento que nuestros programas pueden manipular.';
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\n¿Qué te gustaria saber?',
			quick_replies: [
			{
				content_type:"text",
				title:'tipos de variables',
				payload:'tipos_variables'
			},
			{
				content_type:"text",
				title:'declaración de variables',
				payload:'declaracion_variables'
			},
			{
				content_type:"text",
				title:'inicializar variables',
				payload:'inicializar_variables'
			},
			{
				content_type:"text",
				title:'variables globales',
				payload:'variables_globales'
			},
			{
				content_type:"text",
				title:'variables locales',
				payload:'variables_local'
			}
			]
		}
	};
	return messageData;
}

//QuickReplay de datos.
exports.datosPrimitivosQuickreply = function(senderID){
	mensaje='Hablando de tipos de datos primitivos:';
	var messageData = { 
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\n¿Qué te gustaria saber?',
			quick_replies: [
			{
				content_type:'text',
				title:'Enteros',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ENTEROS'
			},
			{
				content_type:'text',
				title:'De punto flotante',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DE-PUNTO-FLOTANTE'
		    },
		    {
		    	content_type:'text',
		    	title:'Caracter',
		    	payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DATOS-PRIMITIVOS'
		    },
		    ]
		}
    };
    return messageData;
}

//QuickReplay de Operadores
exports.operadoresQuickreply = function(senderID){
	mensaje='Un operador es un elemento de programa que se aplica a uno o varios operandos en una expresión o instrucción.';
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\nAqui algunos tipos de Operadores',
			quick_replies: [
			{
				content_type:'text',
				title:'aritméticos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ARITMETICOS'
			},
			{
				content_type:'text',
				title:'de relación y lógicos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DE_RELACION'
			},
			{
				content_type:'text',
				title:'incremento y decremento',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_INCREMENTO'
			},
			{
				content_type:'text',
				title:'de asignación y expresiones',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DE_ASIGNACION'
			},
			{
				content_type:'text',
				title:'condicionales, ternario',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_CONDICIONALES'
			},
			{
				content_type:'text',
				title:'precedencia y orden de evaluación',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PRECEDENCIA'
			},
			]
		}
	};
	return messageData;
}

//QuickReply de Expresiones
exports.expresionesQuickreply = function(senderID){
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:'Tengo estas opciones por el momento:',
			quick_replies: [
			{
				content_type:"text",
				title:'proposiciones',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_TEMAS'
			},
			{
				content_type:"text",
				title:'expresiones aritméticas',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_EJEMPLOS'
			},
			]
		}
	};
	return messageData;
}


//QuickReplay de Bibliotecas
exports.bibliotecasQuickreply = function(senderID){
	mensaje='Hablando de bibliotecas.';
	var messageData = { 
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\n¿Qué te gustaria saber?',
			quick_replies: [
			{
				content_type:"text",
				title:'Signficado',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING-BIBLIOTECAS'
			},
			{
				content_type:"text",
				title:'sintaxis',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_SINTAXIS'
			},
			{
				content_type:"text",
				title:'bibliotecas importantes',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_BIBLIOTECAS-IMPORTANTES'
			},
			]
		}
	};
	return messageData;
}

//QuickReplay de la Evaluación
exports.evaluacionQuickreply = function(senderID){
	mensaje='';
	var messageData = { 
		recipient: {
			id: senderID
		},
		message: {
			text:mensaje+'\n\n¿Qué problema desea resolver?',
			quick_replies: [
			{
				content_type:"text",
				title:'Problema 1',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_PROBLEMA-1'
			},
			{
				content_type:"text",
				title:'Problema 2',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_PROBLEMA-2'
			},
			{
				content_type:"text",
				title:'Problema 3',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_PROBLEMA-3'
			},
			{
				content_type:"text",
				title:'Problema 4',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_PROBLEMA-4'
			},
			{
				content_type:"text",
				title:'Problema 5',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_PROBLEMA-5'
			},
			]
		}
	};
	return messageData;
}