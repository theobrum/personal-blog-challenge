export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: Date;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ArticlePreview = Omit<Article, 'content' | 'imageUrl' | 'createdAt' | 'updatedAt'>;

export type NewsletterSubscriber = {
  id: string;
  email: string;
  subscribedAt: Date;
  active: boolean;
};

export type NewsletterFormData = {
  email: string;
};

export type NewsletterFormState = {
  success: boolean;
  error: string | null;
  loading: boolean;
};