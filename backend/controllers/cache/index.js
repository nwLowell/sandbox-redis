const redisClient = require("./redis");

module.exports = {
    start: async () => await redisClient.connect(),
};
