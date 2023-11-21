/*
  Warnings:

  - You are about to drop the column `responsable_name` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `site` on the `pets` table. All the data in the column will be lost.
  - Added the required column `responsible` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "responsable_name",
ADD COLUMN     "responsible" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "site",
ADD COLUMN     "size" "Size" NOT NULL;
