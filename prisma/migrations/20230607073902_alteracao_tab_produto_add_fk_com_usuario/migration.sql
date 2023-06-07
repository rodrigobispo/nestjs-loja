/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "usuario_id",
ADD COLUMN     "usuarioId" INTEGER;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "FK_usuarioId" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
