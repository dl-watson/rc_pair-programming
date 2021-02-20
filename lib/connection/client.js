const redis = require("redis");
const client = redis.createClient(process.env.REDIS_URL);

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

module.exports = { client };