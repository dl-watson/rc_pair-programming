const redis = require("redis");
const client = redis.createClient(process.env.REDIS_URL);
const { promisify } = require("util");

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("error", (err) => {
  console.log("Error: ", err);
});

client.on("exit", () => {
  console.log("Redis client exiting");
  client.end();
});

module.exports = { client, getAsync, setAsync };
