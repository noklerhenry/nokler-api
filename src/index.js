const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const { genreDB, platformsDB, storesDB } = require("./dbLoader");

const PORT = process.env.PORT || 3001;

const app = express();

const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CORS_URL.toString()); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);

const server = app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
