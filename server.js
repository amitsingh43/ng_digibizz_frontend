const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.get("/healthz", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (e) {
    console.error(e);
    healthcheck.message = e;
    res.status(503).send();
  }
});
app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
