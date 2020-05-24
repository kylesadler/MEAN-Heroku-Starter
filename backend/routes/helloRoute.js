var express = require('express');
var router = express.Router();
const helloAPI = require('../api/helloAPI.js')

router.get("/", (request, response) => {
  console.log("GET api/hello/");
  helloAPI.getAllHellos(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/hello/" + request.params.id);
  helloAPI.getHello(request, response, request.params);
});

router.post("/", (request, response) => {
  console.log("POST api/hello/");
  helloAPI.addHello(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/hello/" + request.params.id);
  helloAPI.updateHello(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/hello/" + request.params.id);
  helloAPI.deleteHello(request, response);
});

module.exports = router;
