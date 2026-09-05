/*
  Warnings:

  - You are about to drop the column `stock` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[external_id]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `external_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productURL` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviews` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "stock",
DROP COLUMN "value",
ADD COLUMN     "external_id" TEXT NOT NULL,
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "productURL" TEXT NOT NULL,
ADD COLUMN     "reviews" TEXT NOT NULL,
ADD COLUMN     "stars" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_external_id_key" ON "products"("external_id");
