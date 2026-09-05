/*
  Warnings:

  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `imgUrl` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productURL` on the `products` table. All the data in the column will be lost.
  - Added the required column `bought_in_last_month` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_best_seller` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `list_price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_url` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "description",
DROP COLUMN "imgUrl",
DROP COLUMN "productURL",
ADD COLUMN     "bought_in_last_month" INTEGER NOT NULL,
ADD COLUMN     "category_name" TEXT NOT NULL,
ADD COLUMN     "img_url" TEXT NOT NULL,
ADD COLUMN     "is_best_seller" BOOLEAN NOT NULL,
ADD COLUMN     "list_price" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "product_url" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(12,2);
