import { prisma } from '$lib/server/prisma';
import type { NewsletterSubscriber } from '@prisma/client';
import { ApiError } from './error-handler.service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const newsletterService = {
  validateEmailIsNotNullOrEmpty(email: string): void {
    if (!email || !email.trim()) {
      throw new ApiError('Email is required', 400);
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      throw new ApiError('Invalid email format', 400);
    }
  },

  async checkIfExists(email: string): Promise<boolean> {
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: email.trim() }
    });
    return !!existing;
  },

  async subscribe(email: string): Promise<NewsletterSubscriber> {
    const trimmedEmail = email.trim();

    this.validateEmailIsNotNullOrEmpty(trimmedEmail);

    const exists = await this.checkIfExists(trimmedEmail);
    if (exists) {
      throw new ApiError('Email already subscribed', 409);
    }

    return await prisma.newsletterSubscriber.create({
      data: { email: trimmedEmail }
    });
  }
};