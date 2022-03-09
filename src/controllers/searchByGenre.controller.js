const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
let array = []

const SearchByGenre = async (req, res) => {
  const { genre } = req.query;
  array.push(genre)

  try {
    if (genre) {
        //console.log(prisma.Genre)
         array.map((o)=>{
             const getDBGenre = prisma.Game.findMany({
               where: {
                 genres: {
                   has: o
                   // mode: 'insensitive'
                 },
               },
               include: {
                 genres: true,
               },
             });
       
             res.status(200).json(getDBGenre);

         })
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  SearchByGenre,
};
