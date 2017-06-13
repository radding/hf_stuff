import { Meteor } from 'meteor/meteor';

import { People } from '../lib/collections';
 
var TWILIO_ACCOUNT_SID = "AC8bbf6f4380d3aafecfba11101dafb562";
var TWILIO_AUTH_TOKEN = "099fe76a62edd7501687eb932a71b215";
var twilio = require('twilio');
var client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

Meteor.startup(() => {
  // code to run on server at startup
  People.forEach((person) => {
	  var twoDaysAgo = new Date();
	  twoDaysAgo.setDate(twoDaysAgo - 2);
	  if (person.date <=  twoDaysAgo) {
		  People.update(person._id, { $set: { person._number, Date.now() } });
		  sendReminder();
	  }
  });
});

function sendReminder(var clientNumber) {
	client.sendMessage({
	  to: clientNumber,
	  from: 'Grandma',
	  body: 'Call your Grandma!'
	});
}

//set up onclick
function sendPassword(var clientNumber) {
	client.sendMessage({
	  to: clientNumber,
	  from: 'Grandma',
	  body: 'Ahoy from Hacker Fellows!'
	});
	
	People.insert(clientNumber, Date.now());
}