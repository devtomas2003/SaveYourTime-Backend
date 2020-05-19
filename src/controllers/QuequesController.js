const { queues } = require('../models');
const crypto = require('crypto');

module.exports = {
    async store(req, res){
        const { deviceID, storeID } = req.body;

        const queue = await queues.create({
            requestID: crypto.createHash('sha256').update(new Date().getTime() + "-" + Math.random()).digest('hex'),
            deviceID,
            storeID,
            requestedAt: new Date().getTime()
        });

        return res.json(queue);
    }
};