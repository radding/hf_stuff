import { Meteor } from 'meteor/meteor';
import  {People}  from '../libs/collections.js';
 
var TWILIO_ACCOUNT_SID = "AC8bbf6f4380d3aafecfba11101dafb562";
var TWILIO_AUTH_TOKEN = "099fe76a62edd7501687eb932a71b215";
// var twilio = require('twilio');
// client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

Meteor.startup(() => {
  // code to run on server at startup
  // People.forEach((person) => {
	//   var twoDaysAgo = new Date();
	//   twoDaysAgo.setDate(twoDaysAgo - 2);
	//   if (person._date <= twoDaysAgo) { 
	// 	People.update(person._id, { $set: { number: person._number }} });
	// 	People.update(person._id, { $set: { date: new Date() }} });
	// 	sendReminder();
	//   }
  // });

	Meteor.methods({
		"login": ({phoneNumber}) => {
			var peeps = People.findOne({phone: phoneNumber});
			
			text("+1"+phoneNumber, "Call Your Grandma, Sam!");
			if (peeps) {
				People.update(peeps._id, {$set: {code: 1234}});
			}
			else {
				People.insert({phone: phoneNumber, code: 1234});			
			}
			return peeps._id;
		},
		verifyCode: ({code, pid}) => {
				var peeps = People.findOne({_id: pid});
				if(code == peeps.code) {
					return true;
				}
				return false;
		},
		remind: (pid) => {
			var peeps = People.findOne({_id: pid});

			text("+1"+peeps.phone, "Sam! Call Your Grandma");
			return true;
		}
	});
});

function text(clientNumber, msg) {
	var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
	client.messages.create({
	  to: clientNumber,
	  from: '+19069346042',
	  body: msg
	},(err, msg) => {
		if (!err) {
        console.log('Success! The SID for this SMS message is:');
        console.log(msg.sid);
        console.log('Message sent on:');
        console.log(msg.dateCreated);
    } else {
       throw new Meteor.Error(500, 'pants-not-found', "Can't find my pants");
    }
	});
}
