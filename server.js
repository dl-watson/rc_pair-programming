const app = require("./lib/app");
const { client } = require("./lib/connection/client");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  client.end();
});
