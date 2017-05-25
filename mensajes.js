const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const responder = require('./app.js');


exports.enviarMensajeTexto = function (senderID, mensaje){
	var messageData = {
		recipient : {
			id: senderID
		},
		message:{
			text: mensaje
		}
	};
	responder.callSendAPI(messageData);
}


exports.enviarMensajeImagen=function(senderID,url){
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			attachment:{
				type: "image",
				payload:{
					url: url
				}
			}
		}
	};
	responder.callSendAPI(messageData);
}


