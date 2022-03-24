const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { deleteKeys } = require("../../services/deleteKey.service");

const deleteKey = async (req, res) => {
  const { keyId } = req.query;
  if (typeof keyId === "string") {
    let keyArray = [];
    keyArray.push(keyId);
    await deleteKeys(keyArray);
  } else if (Array.isArray(keyId)) {
    await deleteKeys(keyId);
  }
  res.status(200).send("deleted");
};

module.exports = {
  deleteKey,
};
