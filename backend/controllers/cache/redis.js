const redis = require('redis');

const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD,
});

client.on('error', (err) => {
  console.log(`Redis Error: ${err}`);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

module.exports = client;