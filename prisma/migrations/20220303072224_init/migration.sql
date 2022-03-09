-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "released_at" TIMESTAMP(3),
    "rating" DOUBLE PRECISION,
    "image" VARCHAR(2048),
    "description" TEXT,
    "trailer" VARCHAR(2048),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
