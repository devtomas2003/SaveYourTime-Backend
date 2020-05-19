module.exports = (sequelize, DataTypes) => {
    const Queues = sequelize.define('queues', {
        requestID: DataTypes.STRING,
        deviceID: DataTypes.STRING,
        storeID: DataTypes.STRING,
        usedAt: DataTypes.DATE,
        requestedAt: DataTypes.DATE
    }, {
        sequelize,
        tableName: 'queues'
    });
    Queues.removeAttribute('id');
    return Queues;
};