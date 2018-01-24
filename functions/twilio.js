const twilio = require('twilio');

const accountSid = 'some twilio id';
const authToken = 'some twilio token';

module.exports = new twilio.Twilio(accountSid, authToken);