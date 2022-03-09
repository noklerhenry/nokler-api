const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const genreData = [
  {
    name: "Action",
  },
  {
    name: "Indie",
  },
  {
    name: "Adventure",
  },
  {
    name: "RPG",
  },
  {
    name: "Strategy",
  },
  {
    name: "Shooter",
  },
  {
    name: "Casual",
  },
  {
    name: "Simulation",
  },
  {
    name: "Puzzle",
  },
  {
    name: "Arcade",
  },
  {
    name: "Platformer",
  },
  {
    name: "Racing",
  },
  {
    name: "Massively Multiplayer",
  },
  {
    name: "Sports",
  },
  {
    name: "Fighting",
  },
  {
    name: "Family",
  },
  {
    name: "Board",
  },
  {
    name: "Educational",
  },
  {
    name: "Card",
  },
];

const gameData = [
  {
    name: "The Witcher 3: Wild Hunt",
    genres: {
      connect: [{ id: "119" }, { id: "120" }],
    },
  },
];

const main = async () => {
  console.log("Seeding Genres...");
    for (const g of genreData) {
      const genre = await prisma.genre.create({ data: g });
      console.log(`Seeded ${genre.name}`);
    }
  console.log("Seeding Genres... Done!");
  const game = await prisma.game.create({
    data: {
      name: "The Witcher 3: Wild Hunt 23",
      genres: {
        connect: [{ name: "Educational" }, { name: "Board" }],
      },
    },
    include: {
      genres: true,
    },
  });
  console.log(game);
    for (const g of gameData) {
      const game = await prisma.Game.create({ data: g });
      console.log(`Seeded ${game.name}`);
    }
  console.log("Seeding Games... Done!");

  console.log("Seeding finished!");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
