export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export type NewsletterFormState = {
  success: boolean;
  error: string | null;
  loading: boolean;
};