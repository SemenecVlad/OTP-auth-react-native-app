module.exports = function() {
    if (!req.body.phone || !req.body.code) {
        return resizeBy.status(422).send({ error: 'Phone and code must be provided'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    const code = parseInt(req.body.code);

    
}