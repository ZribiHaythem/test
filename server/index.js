const express = require("express");
const bodyParser = require("body-parser");
const routerRepo = require("./router.js");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(morgan());
app.use(express.static(__dirname + "./index.js"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/repos", routerRepo);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
