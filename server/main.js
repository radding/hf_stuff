import { Meteor } from 'meteor/meteor';

var TWILIO_ACCOUNT_SID = "AC8bbf6f4380d3aafecfba11101dafb562";
var TWILIO_AUTH_TOKEN = "099fe76a62edd7501687eb932a71b215";
var twilio = require('twilio');
var client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
var clientNumber = "";

Meteor.startup(() => {
  // code to run on server at startup
});

function getValues() {
	//get some html id's content
	//get some html id's content
}

//set up onclick
function sendPassword() {
	getValues();
	client.sendMessage({
	  to: clientNumber,
	  from: 'Grandma',
	  body: 'Ahoy from Twilio!'
	});
}