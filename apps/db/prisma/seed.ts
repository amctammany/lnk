// prisma/seed.ts

import { PrismaClient } from "@prisma/client/edge";
//import { links } from '../data/links'
const prisma = new PrismaClient();

async function main() {
  await prisma.hop.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Alex",
      email: `testemail@gmail.com`,
      username: "test",
    },
  });
  await prisma.recipe.create({
    data: {
      name: "Recipe1",
      description: "Desc",
      authorId: user.id,
      slug: "Recipe1",
    },
  });
  await prisma.recipe.create({
    data: {
      name: "Recipe2",
      description: "Desc",
      authorId: user.id,
      slug: "Recipe2",
    },
  });

  await prisma.hop.createMany({
    data: [
      { name: "Apollo", slug: "apollo" },
      { name: "Citra", slug: "citra" },
      { name: "Mosaic", slug: "mosaic" },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
