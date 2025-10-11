-- CreateTable
CREATE TABLE "Furniture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Furniture_pkey" PRIMARY KEY ("id")
);
