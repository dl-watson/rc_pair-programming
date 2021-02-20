const { Router } = require("express");
const { getAsync } = require("../connection/client");

module.exports = Router().get("/", (req, res, next) => {
  let keyname;
  for (let val in req.query) {
    keyname = req.query[val];
  }

  return getAsync(`${keyname}`)
    .then((keyvalue) => {
      console.log({ [keyname]: keyvalue });
      res.send({ [keyname]: keyvalue });
    })
    .catch(next);
});
