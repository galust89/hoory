const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("./models");
const router = require("./router");

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.use(router);

const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on: ", port);
