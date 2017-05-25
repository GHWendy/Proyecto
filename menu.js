const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const APP_TOKEN = 'EAATCGQ6pAngBAD0ZBeceqaUX5YsXY51UJJYrSEOpNWjlWoeYKgI3OildLU1XsaS0ZAkkkSwoMZAM4jv29I4Y3tpMiWdqa1oPRCMxkrAQ5luIpSTTK3ZANTK3vPRpDtMp9kVyTjIKttnD4ZC0s1ftzr007siA4AfEPBa01onF4BAZDZD'


exports.menuQuickreply = function(senderID){
	var messageData = {
		recipient: {
			id: senderID
		},
		message: {
			text:'Tengo estas opciones:',
			quick_replies: [
			{
				content_type:"text",
				title:'Temas',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_TEMAS'
			},
			{
				content_type:"text",
				title:'Ejemplos',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_EJEMPLOS'
			},
			{
				content_type:"text",
				title:'Reconcimiento errores',
				payload:'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RECONOCIMIENTO_ERRORES'
			}
			]
		}
	}
	return messageData
}

