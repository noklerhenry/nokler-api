const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const cors = require("cors");


const {
  genreDB,
  platformsDB,
  storesDB
} = require('./dbLoader')

const PORT = process.env.PORT || 3001;

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.use("/", routes);

app.use(cors({ origin: "http://localhost:3000" }));


const server = app.listen(PORT, () =>{
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
});
