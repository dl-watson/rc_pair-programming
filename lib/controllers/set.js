const { Router } = require("express");
const { setAsync } = require("../connection/client");

module.exports = Router().get("/", (req, res, next) => {
  let keyname;
  let keyvalue;
  for (let key in req.query) {
    keyname = key;
    keyvalue = req.query[key];
  }

  return setAsync(`${keyname}`, `${keyvalue}`)
    .then((data) => {
      console.log({ status: data });
      res.send({ status: data });
    })
    .catch(next);
});
