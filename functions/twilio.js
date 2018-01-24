const twilio = require('twilio');

const accountSid = 'ACbdc09e21a9687772c6f9baa3a6918efe';
const authToken = '92323d91b60d5f768ce10a7ef41f9091';

module.exports = new twilio.Twilio(accountSid, authToken);