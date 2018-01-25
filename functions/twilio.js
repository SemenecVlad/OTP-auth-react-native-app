const twilio = require('twilio');

const accountSid = 'id from twilio';
const authToken = 'token from twilio';

module.exports = new twilio.Twilio(accountSid, authToken);