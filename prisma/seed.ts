import { PrismaClient } from '@prisma/client';
import { articlesData } from './data/articles';

declare const process: any; // To avoid TS error about process not being defined

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  for (const article of articlesData) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: article,
      create: article,
    });
    console.log(`Upserted article: ${article.title}`);
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });