const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
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



const server = app.listen(PORT, () =>{
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
});
