const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteKeys = async (keyId) => {
  if (keyId.length >= 1) {
    for (let id of keyId) {
      const searchKeyToDelete = await prisma.key.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (searchKeyToDelete) {
        const keysToDeleted = await prisma.key.delete({
          where: {
            id: Number(id),
          },
        });
        console.log("key deleted: ", keysToDeleted);
      }
    }
  } else {
    console.log("Key doesnt exists");
  }
};

module.exports = {
  deleteKeys,
};
