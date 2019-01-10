'use strict';

module.exports = {
	addPhoneBookEntry: addPhoneBookEntry
};

var lastPhoneBookId = 0;
var phoneBookEntries = [];

function addPhoneBookEntry(req, res) {
	lastPhoneBookId++;
	var phoneBookEntry = {
		entryId: lastPhoneBookId.toString(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		phoneType: req.body.phoneType
	};

	phoneBookEntries.push(phoneBookEntry);

	res.status(201);
	res.send(phoneBookEntry);
}
