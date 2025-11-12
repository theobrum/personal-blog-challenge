import { PrismaClient } from '@prisma/client';

declare const process: any; // To avoid TS error about process not being defined

const prisma = new PrismaClient();

const articles = [
  {
    title: 'Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated',
    slug: 'balancing-hobbies-and-coding',
    excerpt: 'Finding balance between coding and outdoor activities has been essential for my productivity and mental health.',
    content: 'This is test content for the first article.',
    author: 'Paulina',
    publishedDate: new Date('2025-02-18'),
  },
  {
    title: 'Reading for Inspiration: 5 Books That Shaped My Coding Journey',
    slug: 'reading-for-inspiration',
    excerpt: 'These five books have profoundly influenced my approach to programming and problem-solving.',
    content: 'This is test content for the second article.',
    author: 'Paulina',
    publishedDate: new Date('2025-02-15'),
  },
  {
    title: 'Overcoming Imposter Syndrome as a New Developer',
    slug: 'overcoming-imposter-syndrome',
    excerpt: "If you've ever felt like you don't belong or you're not 'good enough' as a developer, you're definitely not alone.",
    content: 'This is test content for the third article.',
    author: 'Paulina',
    publishedDate: new Date('2025-02-10'),
  },
  {
    title: 'Exploring the World of Responsive Design',
    slug: 'exploring-responsive-design',
    excerpt: 'Responsive design is more than just making websites look good on mobile—its about creating flexible experiences.',
    content: 'This is test content for the fourth article.',
    author: 'Paulina',
    publishedDate: new Date('2025-02-04'),
  },
  {
    title: 'My Favorite Dev Tools for Productivity',
    slug: 'favorite-dev-tools',
    excerpt: 'A curated list of tools and extensions that have significantly improved my development workflow.',
    content: 'This is test content for the fifth article.',
    author: 'Paulina',
    publishedDate: new Date('2025-01-29'),
  },
];

async function main() {
  console.log('Starting seed...');

  for (const article of articles) {
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