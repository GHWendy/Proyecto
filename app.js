const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const APP_TOKEN = 'EAAVUtulkMxoBAMfR6lY9nia0W6ipZCfJyGleLiXMxZA38zDSe7UZAtZC1nWaklPDgSskV8y2xLFQ25kI5wnx2SkVRfWXUEpoYzklpUnQVm2MguKZBG3YQskK2JWBHmF1tx63McCWExD1cwXtTcWcix862Rp9zvCvHLIZCqHzOfhgZDZD'

var app = express()

app.use(bodyParser.json())

app.listen(3000,function(){
	console.log('Server listen localhost:3000')
})

app.get('/webhook', function(req, res){
	if(req.query['hub.verify_token']='hello_token'){
		res.send(req.query['hub.challenge'])
	}else{
		res.send('tu no puedes entrar xd')
	}
	
})

app.post('/webhook', function(req, res){
	var data = req.body
	if(data.object == 'page'){
		data.entry.forEach(function(pageEntry){
			pageEntry.messaging.forEach(function(messagingEvent){
				if(messagingEvent.message){
					
					obtenerMensaje(messagingEvent)
				}
			})
		})
	}
	res.sendStatus(200)
})

function obtenerMensaje(event){
	var senderID = event.sender.id
	var messageText = event.message.text
	evaluarMensaje(senderID, messageText)
}
function evaluarMensaje(senderID, messageText){
	var mensaje ='';

	if(siContiene(messageText, 'estructuras de control')){
		mensaje = 'Las estructuras de control nos permiten controlar el flujo del programa: tomar decisiones, realizar acciones repetitivas, etc., dependiendo de unas condiciones se le proporcione.'

	}
	else if(siContiene(messageText, 'variables')){
		mensaje = 'Una variable es simplemente el nombre que se le da a la zona de almacenamiento que nuestros programas pueden manipular.'

	}
	else if(siContiene(messageText,'operadores aritméticos')){
		mensaje = 'Los operadores aritméticos binarios son +(suma), -(resta), *(producto), /(división) y el operador modulo %. Esta última produce el residuo de una división.'

	}else{
		mensaje = 'Mis programadores son flojos y aun no han hecho nada, por lo que te devulvo el mensaje :'+messageText
	}

	enviarMensajeTexto(senderID, mensaje)
}
function enviarMensajeTexto(senderID, mensaje){
	var messageData = {
		recipient : {
			id: senderID
		},
		message:{
			text: mensaje
		}
	}

	callSendAPI(messageData)
}

function callSendAPI(messageData){
	//api facebook
	request({
		uri:'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token: APP_TOKEN},
		method: 'POST',
		json: messageData
	}, function(error, response, data){
		if(error)
			console.log('No es posible enviar el mensaje')
		else
			console.log('Mensaje enviado')
	})
}
function siContiene(texto, word){
	return texto.indexOf(word) > -1
}



