const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const before = Date.now();

  const result = await next(params);

  const after = Date.now();

  console.log(
    `Query ${params.model}.${params.action} took ${after - before}ms`
  );
  return result;
});

const createUser = async (user) => {
  try {
    const { email } = user;

    const userSearch = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userSearch) {
      const newUser = await prisma.user.create({
        data: {
          email,
        },
      });

      return newUser;
    } else {
      throw new Error("User already exists");
    }
  } catch (error) {
    throw error;
  }
};

const getUser = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, user) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        ...user,
      },
    });

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const blockUserService = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (user) {
    const userDisable = prisma.user.update({
      where: { id: Number(id) },
      data: {
        enable: false,
      },
    });
    return userDisable;
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  blockUserService,
};
