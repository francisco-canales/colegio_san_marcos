/*
  Warnings:

  - You are about to drop the column `password` on the `usuarios` table. All the data in the column will be lost.
  - The `rol` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `nombre` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'COORDINADOR');

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "password",
ADD COLUMN     "nombre" TEXT NOT NULL,
ADD COLUMN     "passwordHash" TEXT NOT NULL,
DROP COLUMN "rol",
ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'COORDINADOR';
