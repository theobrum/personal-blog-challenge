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
  {
    title: 'Understanding CSS Grid: A Complete Guide',
    slug: 'understanding-css-grid-complete-guide',
    excerpt: 'Master CSS Grid layout with practical examples and real-world applications.',
    content: 'CSS Grid has revolutionized how we build layouts on the web. In this comprehensive guide, we\'ll explore the fundamentals of Grid, from basic container properties to advanced techniques like grid template areas and auto-placement. Whether you\'re building a simple blog layout or a complex dashboard, Grid provides the tools you need.',
    author: 'Paulina',
    publishedDate: new Date('2025-01-15'),
  },
  {
    title: 'My Journey Learning TypeScript',
    slug: 'my-journey-learning-typescript',
    excerpt: 'How TypeScript improved my code quality and developer experience.',
    content: 'Switching to TypeScript was one of the best decisions in my development career. Initially intimidating, TypeScript\'s type system caught countless bugs before they reached production. This article shares my experience migrating a large JavaScript project to TypeScript, including tips for gradual adoption and common pitfalls to avoid.',
    author: 'Paulina',
    publishedDate: new Date('2025-01-08'),
  },
  {
    title: 'Building Accessible Web Components',
    slug: 'building-accessible-web-components',
    excerpt: 'Essential practices for creating inclusive and accessible UI components.',
    content: 'Accessibility isn\'t just about compliance—it\'s about creating a web that works for everyone. This guide covers essential ARIA attributes, keyboard navigation patterns, and screen reader considerations when building custom web components. Learn how to make your components truly accessible from the ground up.',
    author: 'Paulina',
    publishedDate: new Date('2024-12-28'),
  },
  {
    title: 'Git Workflow for Solo Developers',
    slug: 'git-workflow-solo-developers',
    excerpt: 'Effective Git strategies when you\'re working on projects alone.',
    content: 'Working solo doesn\'t mean you should skip good Git practices. This article explores branching strategies, commit message conventions, and workflow patterns that help maintain clean project history even when you\'re the only developer. Plus, tips for documenting your work for future you.',
    author: 'Paulina',
    publishedDate: new Date('2024-12-20'),
  },
  {
    title: 'The Art of Code Reviews',
    slug: 'the-art-of-code-reviews',
    excerpt: 'How to give and receive constructive feedback on code.',
    content: 'Code reviews are more than finding bugs—they\'re opportunities for learning and collaboration. This guide covers how to write helpful review comments, what to look for beyond syntax, and how to receive feedback gracefully. Great code reviews make teams stronger and codebases better.',
    author: 'Paulina',
    publishedDate: new Date('2024-12-15'),
  }
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